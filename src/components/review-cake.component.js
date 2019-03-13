import React, {Component} from 'react';

export default class ReviewCake extends Component {

  constructor(props) {

    super(props);

    this.onChangeReviewCakeName = this.onChangeReviewCakeName.bind(this);
    this.onChangeReviewCakeComment = this.onChangeReviewCakeComment.bind(this);
    this.onChangeReviewCakeYumFactor = this.onChangeReviewCakeYumFactor.bind(this);
    this.onSubmitReviewCake = this.onSubmitReviewCake.bind(this);

    this.state = {
      cake_name: '',
      cake_comment: '',
      cake_yumFactor: 0
    }
  }

  // Review Cake Part 1 - Capture Cake Name
  onChangeReviewCakeName(e) {
    this.setState({
      cake_name: e.target.value
    });
  }
  // Review Cake Part 2 - Capture Cake Comment
  onChangeReviewCakeComment(e) {
    this.setState({
      cake_comment: e.target.value
    });
  }
  // Add Cake Part 3 - Capture Cake Yum Factor
  onChangeReviewCakeYumFactor(e) {
    console.log(e.target.value);
    this.setState({
      cake_yumFactor: e.target.value
    });
    console.log(this.cake_yumFactor); // need to work out why this is undefined
  }

  // Add Cake Part 6 - Form Submit Logic
  onSubmitReviewCake(e) {
    // Prevent page reload
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Cake Name: ${this.state.cake_name}`);
    console.log(`Cake Comment: ${this.state.cake_comment}`);
    console.log(`Cake Yum Factor: ${this.state.cake_yumFactor}`);

    // Reset state after cake added
    this.setState({
      cake_name: '',
      cake_comment: '',
      cake_yumFactor: 0
    });

  }

  render() {
    return (
      <div>
        <h1>Review a Cake</h1>
        <form className="review-form" onSubmit={this.onSubmitReviewCake}>
          <div className="form-group">
            <label>Cake Name:</label>
            <input type="text" placeholder="Enter cake name" value={this.state.cake_name} onChange={this.onChangeReviewCakeName}/>
          </div>
          <div className="form-group">
            <label>Cake Comment:</label>
            <input type="text" placeholder="Enter cake comment" value={this.state.cake_comment} onChange={this.onChangeReviewCakeComment}/>
          </div>
          <div className="form-group">
            <label className="yumfactor-title">Yum Factor:</label>
            <input id="yum1" type="checkbox" name="yumFactor" value="1" onChange={this.onChangeReviewCakeYumFactor}/>
            <label htmlFor={'yum1'}></label>
            <input id="yum2" type="checkbox" name="yumFactor" value="2" onChange={this.onChangeReviewCakeYumFactor}/>
            <label htmlFor={'yum2'}></label>
            <input id="yum3" type="checkbox" name="yumFactor" value="3" onChange={this.onChangeReviewCakeYumFactor}/>
            <label htmlFor={'yum3'}></label>
            <input id="yum4" type="checkbox" name="yumFactor" value="4" onChange={this.onChangeReviewCakeYumFactor}/>
            <label htmlFor={'yum4'}></label>
            <input id="yum5" type="checkbox" name="yumFactor" value="5" onChange={this.onChangeReviewCakeYumFactor}/>
            <label htmlFor={'yum5'}></label>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
