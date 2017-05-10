/*
* Payment Calculator Page
*/

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './../../store';
import components from 'components';

class GetInitialResource extends Component {

  state = {
    modalComponents: [],
    isDiffProps: false
  };

  componentWillMount() {
    const { resposonseLoaded } = this.props;
    resposonseLoaded();
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(this.state.isDiffProps);
    if (nextProps.responseData && this.state.isDiffProps !== true) {
       const { responseData } = nextProps;
       const { modalComponents } = this.state;
      const comps = responseData[0].Inputs.newTemp.Section; 

        comps.forEach((cData) => {
          console.log(typeof components[cData.TemplateID]);
          if(typeof components[cData.TemplateID] !== "undefined") {
            components[cData.TemplateID]().then((DynamicComponent) => {
              modalComponents.push({
                ComponentClass: DynamicComponent,
                componentProps: cData,
                id: cData.TargetLocation
              })
               this.setState({
                modalComponents,
                isDiffProps: true
              })
              
              }).catch((err) => {
                console.log(err); // eslint-disable-line
              });
            
          }
          })
       
    } 
   
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderDynamicComponent();
  }

  renderDynamicComponent = (responseData) => {
    // const responseDataFromJSON = (responseData === undefined) ? null : responseData[0];
   
    const { modalComponents } = this.state;
    const { clicked, activeTab, loader, device, addDeviceResponseData } = this.props;

   

console.log(this.state.modalComponents);
const initialState = {};
const store = configureStore(initialState);
      //return (
          modalComponents.map((component, index) => {
          const { ComponentClass, componentProps } = component;
          const { id } = component;
          const element = document.getElementById(id);
          // console.log(component);

           return(
              ReactDOM.render(
                <Provider store={store}>
                <ComponentClass 
                  {...componentProps} 
                  key={index} 
                  clicked={clicked} 
                  activeTab={activeTab} 
                  loader={loader}
                  device={device}
                  addDeviceResponseData={addDeviceResponseData}
                /></Provider>, element
                )
              )
           })  
      
      //)
  }

  
  render() {
    return null;
    
  }
}

export default GetInitialResource;
