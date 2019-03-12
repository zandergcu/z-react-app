import React, {Component} from 'react';

export default class CakeList extends Component {

  constructor(props) {

    super(props);

    this.onChangeCakeName = this.onChangeCakeName.bind(this);
    this.onChangeCakeComment = this.onChangeCakeComment.bind(this);
    this.onChangeCakeImageUrl = this.onChangeCakeImageUrl.bind(this);
    this.onChangeCakeYumFactor = this.onChangeCakeyYumFactor.bind(this);
    this.onSubmitAddCake = this.onSubmitAddCake.bind(this);

    this.state = {
      cake_id: '',
      cake_name: '',
      cake_comment: '',
      cake_imageUrl: '',
      cake_yumFactor: 1
    }
  }

  // Add Cake Part 1 - Capture Cake Name
  onChangeCakeName(e) {
    this.setState({
      cake_name: e.target.value
    });
  }
  // Add Cake Part 2 - Capture Cake Comment
  onChangeCakeComment(e) {
    this.setState({
      cake_comment: e.target.value
    });
  }
  // Add Cake Part 3 - Capture Cake Image Url
  onChangeCakeImageUrl(e) {
    this.setState({
      cake_imageUrl: e.target.value
    });
  }
  // Add Cake Part 5 - Capture Cake Yum Factor
  onChangeCakeYumFactor(e) {
    this.setState({
      cake_yumFactor: e.target.value
    });
  }
  // Add Cake Part 6 - Form Submit Logic
  onSubmitAddCake(e) {
    // Prevent page reload
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Cake Name: ${this.state.cake_name}`);
    console.log(`Cake Comment: ${this.state.cake_comment}`);
    console.log(`Cake Image Url: ${this.state.cake_imageUrl}`);
    console.log(`Cake Yum Factor: ${this.state.cake_yumFactor}`);

    // Reset state after cake added
    this.setState({
      cake_id: '',
      cake_name: '',
      cake_comment: '',
      cake_imageUrl: '',
      cake_yumFactor: 1
    });

  }

  render() {
    return (
      <div>
        <p>Cake List Component</p>
        <div className="sidePanelContainer">

          <div className="sidePanelButton">
            <label>Add</label>
          </div>

          <div className="sidePanelContent">
            <form onSubmit="this.onSubmitAddCake">
              <div className="form-group">
                <label>1:</label>
                <input type="text" placeholder="1"/>
              </div>
            </form>
          </div>

        </div>
      </div>
    )
  }
}
