/*
* VZW_PaymentCalculatorPlan Template
*/

import React, { Component, PropTypes } from 'react';
import LinkList from './LinkList';
import AnchorLink from './../../common/AnchorLink';
import ModalComponent from './../../common/Modal';
import 'es6-promise/auto';

class VZW_PaymentCalculatorPlan extends Component {

 _handleClick = (e) => {
  console.log('clicked');
    const { fetchPaymentDetailsData } = this.props;
    const data = e.target.dataset.id;
 
    fetchPaymentDetailsData(data); 
  }

  _handleAddDevice = () => {
    const { addADevice, Inputs } = this.props;
    const responseDataFromJSON = (Inputs === undefined) ? null : Inputs;

    addADevice(responseDataFromJSON);
    this._modal.handleOpenModal();
  }

  _handleModalAddDevice = (addDeviceData) => {
    // console.log(addDeviceData);

    return(addDeviceData) && (
      <div className="addADevice">
           {
            addDeviceData.Inputs && addDeviceData.Inputs.newTemp.Section.map((data, index) => {
              return (
              (data.DisplayLocation === "LargeModal" && 
                <div key={index} className="heading">
                  <h2>{data.Inputs.Header}</h2>
                  <h4>{data.Inputs.SubHeader}</h4>
                  <div className="deviceList">
                      {
                        data.Inputs.DeviceTypes && data.Inputs.DeviceTypes.SupportedDevice.map((deviceData, index) => {
                            return(
                              <div key={index} className="dataList">
                                <div>{deviceData.ProductName}</div>
                                <div>{deviceData.count}</div>
                                <div>{deviceData.ActivationFee}</div>   
                                <div><img src={deviceData.imgUrl} alt={deviceData.name1}/></div>
                              </div>
                            )
                        })
                      }
                  </div>
                </div>
              ))
           })
         }
      </div>
    )
  }

  renderMonthlyDataPlan = (Inputs, clicked, activeTab) => {
    const { single, shared } = clicked;

    const data = (Inputs === undefined) ? null : Inputs;
    const newData = data;

    const tabs = [{
        "name" : "Single-phone plan",
        "href" : "#",
        "id" : "single"
      },{
        "name" : "Shared plan",
        "href" : "#",
        "id" : "shared"   
      }]
    
    return (newData) && (
      <div className="wrapper">
        <h3>Select your monthly data plan</h3>
        <p className="bold">Unlimited Talk &amp; Text is included with every size.</p>

        {
          tabs && tabs.map(tabData => (
           <AnchorLink 
              {...tabData}
              activeTab = {(tabData.id === activeTab) ? 'currentItem' : '' }  
              onClick={this._handleClick} 
              key={tabData.id} 
            />
          ))
        }          

        {shared.display && <div>
          <ul>
           {
                  (
                      
                      data.PlanList.plan.map((listData, index) => {
                        return(
                          (listData.singleDeviceTvp2Plan === "false" &&
                            <LinkList data={listData} key={index} />
                          )
                        )
                    })                    
                  )
          }
          </ul>
        </div>
      }

      {single.display && <div>
          <ul>
           {

                  (data.DisplayLocation === "LeftBottom" && 
                      
                      data.PlanList.plan.map((listData, index) => {
                        return(
                          (listData.singleDeviceTvp2Plan === "true" &&
                            <LinkList data={listData} key={index} />
                          )
                        )
                    })
                    
                  )

          }
          </ul>
        </div>
      }
      </div>
    )
  }

  render() {
    const { Inputs, clicked, activeTab, loader, device, addDeviceResponseData, inprogress, fetchPaymentDetailsData } = this.props;
    console.log(this.props.fetchPaymentDetailsData);
    return (
      <div className="main">

        {this.renderMonthlyDataPlan(Inputs, clicked, activeTab)}
        
      </div>
    )
    
  }
}

export default VZW_PaymentCalculatorPlan
