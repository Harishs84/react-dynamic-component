import React, { Component, PropTypes } from 'react';
import request from 'axios';
import ReactStars from './ReactStars';
import A from '../A/A';
import Title from '../Title/Title';
import BackButton from '../BackButton/BackButton';

class Feedback extends Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = { rating: null, comment: '' };
  }

  onchange(event) {
    this.setState({ comment: event.target.value });
  }

  ratingChanged(rating) {
    this.setState({ rating });
  }

  postFeedback() {
    return request({
      method: 'post',
      url: '/digital/feedback/customer/save',
      data: this.state,
    }).then((response) => {
      window.location.reload();
    }).catch((error) => {
    });
  }
  render() {
    const { rating, comment } = this.state;
    return (
      <div>
        <div className="pad12 onlyTopPad">
          <BackButton onClick={this.props.closeFeedback.bind(this)} />
        </div>
        <div className="textAlignCenter pad24">
          <div>
            <Title>Please rate your Verizon experience</Title>
          </div>
          <form onSubmit={this.props.handleSubmit}>
            <div className="pad18 onlyBottomPad">
              <div className="pad48 onlyLeftPad">
                <ReactStars count={5} onChange={this.ratingChanged.bind(this)} size={45} color2={'#ffd700'} half={false} value={rating} />
              </div>
            </div>
            {rating &&
              <div>
                  {(rating < 4) ?
                    <div className="pad24 noSidePad">
                      <div className="fontSize_4 bold pad12">Tell us about your experience.</div>
                      <textarea className="pad12 noSidePad width80" type="text" placeholder="Your voice matters." style={{ padding: 12 }} onChange={this.onchange.bind(this)} />
                    </div> : ''}
                <div className="pad36">
                  <A className="button secondary margin6 onlyRightMargin" onClick={this.props.closeFeedback.bind(this)}>Cancel</A>
                  {(rating == null && comment == '') ? <A className="button disabled">Submit</A> : <button className="button " onClick={this.postFeedback.bind(this)}>Submit</button>}
                </div>
              </div> }
          </form>
        </div>
      </div>
    );
  }
}
Feedback.propTypes = {
  closeFeedback: PropTypes.func,
  handleSubmit: PropTypes.func,
};
export default Feedback;
