import React, {Component} from 'react';

export default class CakeList extends Component {

  constructor(props) {

    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onChangeCakeName = this.onChangeCakeName.bind(this);
    this.onChangeCakeComment = this.onChangeCakeComment.bind(this);
    this.onChangeCakeImageUrl = this.onChangeCakeImageUrl.bind(this);
    this.onChangeCakeYumFactor = this.onChangeCakeYumFactor.bind(this);
    this.onSubmitAddCake = this.onSubmitAddCake.bind(this);

    this.state = {
      active: false,
      cake_id: '',
      cake_name: '',
      cake_comment: '',
      cake_imageUrl: '',
      cake_yumFactor: 0
    };
  }

  toggleOpen() {
      console.log("toggle");
      let currentState = this.state.active;
      console.log(currentState);
      this.setState({ active: !currentState });
  };

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
      cake_yumFactor: 0
    });

  }

  render() {
    return (
      <div>
        <h1>View All Cakes</h1>

        <div className="flex-center cakes">
          <a href="#">
            <div className="cake">
              <img src="https://via.placeholder.com/50" alt="cake"/>
              <label>Name</label>
            </div>
          </a>
          <a href="#">
            <div className="cake">
              <img src="https://via.placeholder.com/50" alt="cake"/>
              <label>Name</label>
            </div>
          </a>
          <a href="#">
            <div className="cake">
              <img src="https://via.placeholder.com/50" alt="cake"/>
              <label>Name</label>
            </div>
          </a>
          <a href="#">
            <div className="cake">
              <img src="https://via.placeholder.com/50" alt="cake"/>
              <label>Name</label>
            </div>
          </a>
          <a href="#">
            <div className="cake">
              <img src="https://via.placeholder.com/50" alt="cake"/>
              <label>Name</label>
            </div>
          </a>
          <a href="#">
            <div className="cake">
              <img src="https://via.placeholder.com/50" alt="cake"/>
              <label>Name</label>
            </div>
          </a>
          <a href="#">
            <div className="cake">
              <img src="https://via.placeholder.com/50" alt="cake"/>
              <label>Name</label>
            </div>
          </a>
          <a href="#">
            <div className="cake">
              <img src="https://via.placeholder.com/50" alt="cake"/>
              <label>Name</label>
            </div>
          </a>

        </div>

        <div className={"sidePanelContainer" + this.state.active ? "sidePanelContainer open": ""}>

          <div className="sidePanelButton" onClick={this.toggleOpen}>
            <label>Add</label>
          </div>

          <div className="sidePanelContent">
            <h2>Add a Cake</h2>
            <form onSubmit={this.onSubmitAddCake}>
              <div className="form-group">
                <label>Cake Name:</label>
                <input type="text" placeholder="Enter cake name" value={this.state.cake_name} onChange={this.onChangeCakeName}/>
              </div>
              <div className="form-group">
                <label>Cake Comment:</label>
                <input type="text" placeholder="Enter cake comment" value={this.state.cake_comment} onChange={this.onChangeCakeComment}/>
              </div>
              <div className="form-group">
                <label>Cake Image URL:</label>
                <input type="text" placeholder="Enter image url" value={this.state.cake_imageUrl} onChange={this.onChangeCakeImageUrl}/>
              </div>
              <div className="form-group">
                <label>Cake Yum Factor (1-5):</label>
                <input type="text" placeholder="Enter cake yum factor" value={this.state.cake_yumFactor} onChange={this.onChangeCakeYumFactor}/>
              </div>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
