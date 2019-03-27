import React, {Component} from 'react';

export default class ReviewCake extends Component {

  constructor(props) {

    super(props);

    this.onChangeReviewCakeName = this.onChangeReviewCakeName.bind(this);
    this.onChangeReviewCakeComment = this.onChangeReviewCakeComment.bind(this);
    this.onChangeReviewCakeYumFactor = this.onChangeReviewCakeYumFactor.bind(this);
    this.onSubmitReviewCake = this.onSubmitReviewCake.bind(this);
    this.sortChecks = this.sortChecks.bind(this);

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

  sortChecks(x) {
    // uncheck all check boxes - works fine just now because how simple component is
    var checkboxes = new Array();
    checkboxes = document.getElementsByTagName('input');
    for (var i=0; i<checkboxes.length; i++){
      if (checkboxes[i].type == 'checkbox'){
        checkboxes[i].checked = false;
      }
    }
    switch (x) {
      case "0":
        break;
      case "1":
        document.getElementById("yum1").checked = true;
        break;
      case "2":
        document.getElementById("yum1").checked = true;
        document.getElementById("yum2").checked = true;
        break;
      case "3":
        document.getElementById("yum1").checked = true;
        document.getElementById("yum2").checked = true;
        document.getElementById("yum3").checked = true;
        break;
      case "4":
        document.getElementById("yum1").checked = true;
        document.getElementById("yum2").checked = true;
        document.getElementById("yum3").checked = true;
        document.getElementById("yum4").checked = true;
        break;
      case "5":
        document.getElementById("yum1").checked = true;
        document.getElementById("yum2").checked = true;
        document.getElementById("yum3").checked = true;
        document.getElementById("yum4").checked = true;
        document.getElementById("yum5").checked = true;
        console.log("hit5");
        break;
      default:
        console.log("error")
    }
  }

  // Add Cake Part 3 - Capture Cake Yum Factor
  onChangeReviewCakeYumFactor(e) {
    let previousValue = this.state.cake_yumFactor;
    let selectedValue = e.target.value;
    console.log("Part 1 - Previous Value: " + previousValue);
    console.log("Part 2 - Selected Value: " + selectedValue);
    this.setState({
      cake_yumFactor: selectedValue
    });
    let selectedCheck = document.getElementById("yum" + selectedValue);
    console.log("Part 3 - New Yum Factor: " + this.state.cake_yumFactor); // TODO: need to work out why this is always one behind
    this.sortChecks(selectedValue);
  }

  // Add Cake Part 6 - Form Submit Logic
  onSubmitReviewCake(e) {
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
