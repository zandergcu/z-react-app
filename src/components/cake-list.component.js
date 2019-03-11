import React, {Component} from 'react';

export default class CakeList extends Component {

  constructor(props) {

    super(props);

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
      </div>
    )
  }
}
