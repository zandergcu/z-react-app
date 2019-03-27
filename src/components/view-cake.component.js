import React, {Component} from 'react';
import axios from 'axios';

export default class ViewCake extends Component {

  constructor(props) {

    super(props);

    this.state = {
      cakes: []
    };
  }

  // TODO: WHEN USER PASSED TO THIS PAGE WITH URL /CAKES/ID - NEED TO USE THIS ID IMMEDIATELY TO PULL IN THAT CAKES DATA

  componentDidMount() {
    axios.get(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes`)
      .then(res => {
        console.log(res.data);
        const cakes = res.data;
        this.setState({ cakes });
      })
  }

  render() {
    return (
      <div>
        <h1>View Cake</h1>
        <div className="cake-box">
          <h2>Cake Name</h2>
          <img src="" alt=""/>
          <p>This is the cake comment</p>
          <p>4/5 Yummy Rating!</p>
          <a className="button go-back" href="/">Go Back</a>
        </div>
      </div>
    )
  }

}
