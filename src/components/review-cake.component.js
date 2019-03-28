import React, {Component} from 'react';
import axios from 'axios';

export default class ReviewCake extends Component {

  constructor(props) {

    super(props);

    this.onChangeReviewCakeName = this.onChangeReviewCakeName.bind(this);
    this.onChangeReviewCakeComment = this.onChangeReviewCakeComment.bind(this);
    this.onChangeReviewCakeYumFactor = this.onChangeReviewCakeYumFactor.bind(this);
    this.onSubmitReviewCake = this.onSubmitReviewCake.bind(this);
    this.checkUncheck = this.checkUncheck.bind(this);

    this.state = {
      cakes: [],
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

  checkUncheck(valueChosen, condition) {
    for(var i = valueChosen; i > 0; i--){
      var thisI = "yum" + i;
      document.getElementById(thisI).checked = condition;
    }
  }

  // Add Cake Part 3 - Capture Cake Yum Factor
  onChangeReviewCakeYumFactor(e) {
    let previousValue = this.state.cake_yumFactor;
    let selectedValue = e.target.value;
    this.setState({
      cake_yumFactor: selectedValue
    });
    let selectedCheck = document.getElementById("yum" + selectedValue);
    this.checkUncheck(5, false);
    this.checkUncheck(selectedValue, true);
  }

  // Add Cake Part 6 - Form Submit Logic
  onSubmitReviewCake(e) {
    e.preventDefault();

    var x = this.state.cake_name;
    var y = this.state.cake_comment;
    var z = this.state.cake_yumFactor;

    // Get list of cakes
    axios.get(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes`)
      .then(res => {
        console.log(res.data);
        const cakes = res.data;
        this.setState({ cakes });
        // Loop over all cakes and check if there is a matching name
        for (var i=0;i<this.state.cakes.length;i++){
          // If there is a matching name store it's ID so we can use it in Put Request
          if(x === cakes[i].name){
            var cakeId = cakes[i].id;
            var cakeName = cakes[i].name;
            var cakeImageUrl = cakes[i].imageUrl;
          }
        }
        // If cakeId not null then do Put Request
        if(cakeId != null){
          console.log("yay");
          var url = "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/" + cakeId;
          axios.put(url, {
            id: cakeId,
            name: cakeName,
            comment: y,
            imageUrl: cakeImageUrl,
            yumFactor: z
           })
            .then(res => {
              console.log("success");
              cakeId = null;
              cakeName = null;
              y = null;
              cakeImageUrl = null;
              z = 0;
              this.checkUncheck(5, false);
            }
          )
        // If cake null then display error message
        } else {
          console.log("Cake to Edit not set");
        }
      })

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
