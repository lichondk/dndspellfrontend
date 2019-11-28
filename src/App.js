import React, { Component }  from 'react';
import logo from './logo.svg';
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: []
    }
}

componentDidMount() {
    //this.props.fetchCustomers();
    fetch('https://dnddev.herokuapp.com').then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
    })
}

onHandle = (e) => {
    //this.setState({
     //   value: e.target.value
    //})
}

	render() {
		return (
      <div className="example">
      <Button>Primary</Button>
      <Button theme="secondary">Secondary</Button>
      <Button theme="success">Success</Button>
      <Button theme="info">Info</Button>
      <Button theme="warning">Warning</Button>
      <Button theme="danger">Danger</Button>
      <Button theme="light">Light</Button>
      <Button theme="dark">Dark</Button>
    </div>
		);
	}
}

export default App;
