import React from 'react';
import Image from './Image';

function ErrorPage(props){
	let wrapperClass = `errorPage-wrapper textAlignCenter ${props.transparent ? '' : 'bg_whitePurple'} ${props.className}`,
		errorImg = props.showErrorImage ? (<div><Img src='/solo_static/img/error-page-icon.png' className="error-img pad40 m-obp" alt='Content not found' /></div>) : null,
		errorTitle = props.errorTitle,
		errorDesc = props.errorDesc ? (<div className='pad40 m-obp' dangerouslySetInnerHTML={{__html: props.errorDesc}} />) : null,
		CtaLabel = props.ctaLabel,
		CtaLink = props.ctaLink !== "" ? props.ctaLink : 'javascript:void(0)',
		Cta = props.showCtaAsLink ? 
			(<a href={CtaLink} className='purpleLink m-big' onClick={props.ctaClickHandler} aria-label={CtaLabel}>{CtaLabel}</a>) :
			(<a href={CtaLink} className='button m-reverse m-fullWidth' onClick={props.ctaClickHandler} aria-role='button' aria-label={CtaLabel}>{CtaLabel}</a>);

	return(
		<div className={wrapperClass}>
			<div className="errorPage-content">
				{errorImg}
				<div className="features-heading bold pad40 m-obp" dangerouslySetInnerHTML={{__html: errorTitle}} />
				{errorDesc}
				{Cta}
			</div>
		</div>
	);
}

ErrorPage.defaultProps = {
	transparent: false,
	showErrorImage: true,
	showCtaAsLink: false
}

ErrorPage.propTypes = {
	/*optional - additional CSS classes to be set on wrapper */
	className: React.PropTypes.string,
	/*optional - set to 'true' if you dont the default background color*/
	transparent: React.PropTypes.bool,
	/** optional - set to false is '/month' text should be shown next to price*/
	/** default - error image [crying smiley] is always shown */
	showErrorImage: React.PropTypes.bool,
	/** required - error title */
	errorTitle: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.object
	]).isRequired,
	/** optional - error description text */
	errorDesc: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.object
	]),
	/** optional - set to 'true' if CTA should be shown a link*/
	/** default is always be shown as button*/
	showCtaAsLink: React.PropTypes.bool,
	/** required - CTA text */
	ctaLabel: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.object
	]).isRequired,
	ctaLink: React.PropTypes.string,
	ctaClickHandler: React.PropTypes.func
}

export default ErrorPage;