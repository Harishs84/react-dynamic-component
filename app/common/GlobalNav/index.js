import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from './Image';
import Menu from './menu';
import staticJSON from './../../../json/globalNavJSON2';
import AnchorLink from './AnchorLink';

const navJSON = (window.globalNav ? window.globalNav : staticJSON);


class GlobalNav extends Component {
  constructor(props) {
    super(props);
    this.state = { isScrollEnable: false };
  }

  componentDidMount() {
    const menuElem = document.getElementsByClassName('bm-menu')[0];
    menuElem.setAttribute('aria-hidden', true);
    menuElem.setAttribute('aria-expanded', 'false');
  }

  handleScroll() {
    this.setState({
      isScrollEnable: true,
    });
    setTimeout(() => {
      this.setState({
        isScrollEnable: false,
      });
    }, 500);
  }

  render() {
    let headerClass = 'header background_supporting col width100 noSidePad no-gutter';
    { this.props.isNotificationVisible ? headerClass += ' m-notification' : ''; }

    return (
      <header className={headerClass}>
        <div className="clearfix onlyTopMargin">
          <Menu openFeedback={this.props.openFeedback.bind(this)} />
          <div className="headerNav_wrapper">
            <div className="floatLeft pad6 ">
              <Image
                src="//ss7.vzw.com/is/image/VerizonWireless/vzw-logo-156-130-c?$pngalpha$"
                alt="Verizon Wireless" 
                style={{ maxWidth: 80 }}
              />
            </div>
            <div className="floatRight margin6 noRightMargin" role="navigation">
              {
               navJSON.icons.map((icon, index) => {
                 let element = '';
                 let cartCount = '';
                 const iconClass = `positionRelative font-icon_${icon.name}-v2`;

                 if (icon.additionalInfo != null) {
                   for (const key of Object.keys(icon.additionalInfo)) { // eslint-disable-line
                     element = <span>{icon.additionalInfo[key]}</span>;
                   }
                 }
                 if(typeof navJSON.cartCount !== 'undefined' && parseInt(navJSON.cartCount) > 0 && icon.name === 'cart'){
                  cartCount = <p className="cartCount">{navJSON.cartCount}</p>
                 }
                 const elem = (icon.imageURL != null) ?
                   <Image src={icon.imageURL} alt={icon.name} className="width18 height18"/> // eslint-disable-line
                   : <i className={iconClass}>{element}</i>; // eslint-disable-line
                 return (<AnchorLink style={{position : 'relative'}} href={icon.url} className="displayInlineBlock" key={index} role="button" aria-label={`${icon.name} icon`} >{cartCount}{elem}</A>);
               })
             }
            </div>
          </div>
        </div>

      </header>
    );
  }
}

GlobalNav.propTypes = {
  openFeedback: React.PropTypes.func,
};
export const mapStateToProps = (state) => {
  const notification = state.get('notification');
  return {
    isNotificationVisible: notification.isNotificationVisible,
  };
};

export default connect(mapStateToProps)(GlobalNav);
