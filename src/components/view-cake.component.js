import React, {Component} from 'react';
import axios from 'axios';

export default class ViewCake extends Component {

  constructor(props) {

    super(props);

    this.state = {
      cakeinfo: []
    };
  }

  componentDidMount() {
    var cake_id = document.location.pathname.split("/")[2];
    var url = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/' + cake_id;
    axios.get(url)
      .then(res => {
        console.log(res.data);
        const cakeinfo = res.data;
        this.setState({ cakeinfo });
        console.log(cakeinfo)
      })
  }

  render() {
    return (
      <div>
        <h1>View Cake</h1>
        <div className="cake-box">
          <h2>{this.state.cakeinfo.name}</h2>
          <img src={this.state.cakeinfo.imageUrl} alt={this.state.cakeinfo.name}/>
          <p className="comment">&ldquo;{this.state.cakeinfo.comment}&rdquo;</p>
          <p className="rating"><strong>{this.state.cakeinfo.yumFactor}/5</strong> Yummy Rating!</p>
          <a className="button go-back" href="/">Go Back</a>
        </div>
      </div>
    )
  }
}
