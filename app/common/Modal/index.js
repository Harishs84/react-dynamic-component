import React, { Component } from 'react';
import ReactModal from 'react-modal';

//added for modal accessibility
ReactModal.setAppElement('#app');

class ModalComponent extends Component{
	constructor(props) {
		super(props);
		this.state = {
			showModal: this.props.isOpenOnLoad
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
    	this.handleCloseModal = this.handleCloseModal.bind(this);
    	this.afterOpenModal = this.afterOpenModal.bind(this);		
	}

	handleOpenModal () {
		this.setState({ showModal: true });
	}

	afterOpenModal () {
		//add modal hashTag value in URL if it passed as prop
		const locationHash = this.props.hashTag;
		if(locationHash){
			window.location.hash = locationHash;
		}
	}

	handleCloseModal () {
		//clear modal hasgTag from URL, if any
		if(window.location.hash){
			window.history.back();
		}

		//close modal
		this.setState({ showModal: false });

		//trigger specified callback function, if any
		if(this.props.onCloseCallback){
			this.props.onCloseCallback();
		}
	}

	render(){
		let escapeHandlerProp = {};
		if (this.props.handleEscapeKey) {
		  escapeHandlerProp.onRequestClose = this.handleCloseModal;
		}

		return(
			<ReactModal 
				isOpen={this.state.showModal}
				shouldCloseOnOverlayClick={this.props.closeOnClick} 
				contentLabel={this.props.modalDescriptionForA11y}
				overlayClassName="Overlay"
				className="Overlay-modal"
				onAfterOpen={this.afterOpenModal}
				{...escapeHandlerProp}>
				{this.props.showCloseButton &&
					<button onClick={this.handleCloseModal} className="closeModal">Close overlay</button>
				}					
				<div className="clear"></div>
				{this.props.children}					
			</ReactModal>
		);
	}
}

ModalComponent.defaultProps = {
	showCloseButton: true,
	isOpenOnLoad: false,
	closeOnClick: false,
	contentLabel: "",
	handleEscapeKey: true
}

ModalComponent.proptypes = {
	/** optional - set to 'false' if modal close btn should be hidden*/
	showCloseButton: React.PropTypes.bool,
	/** optional - set to 'true' if modal should be open on component load*/
	isOpenOnLoad: React.PropTypes.bool,
	/** optional - set to 'true' if overlay should close when you click outside modal*/
	/** default is always 'false' */
	closeOnClick: React.PropTypes.bool,
	/** optional - set to 'false' if overlay should not close when you hit 'esc' key*/
	/** default is always 'true' - modal closes when 'esc' key is pressed */
	handleEscapeKey: React.PropTypes.bool,
	/** optional - modal description to help a11y screen reader & audio users */
	modalDescriptionForA11y: React.PropTypes.string,
	onCloseCallback: React.PropTypes.func,
	/** optional - hashTag value to be added in URL after modal is opened*/
	/** This is part of ensighten tagging requirement*/
	hashTag: React.PropTypes.string
}

export default ModalComponent;