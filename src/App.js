import React, { Component }  from 'react';
import logo from './logo.svg';
import { Button } from "shards-react";
import { Container, Row, Col } from "shards-react";
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
    fetch('https://dnddev.herokuapp.com/spells').then(results => {
      return results.json();
    }).then(data => {
      console.log(data)
        this.setState({value: data})
    })
}


renderTable(){
  return this.state.value.map((spell, index) => {
    return (
      <Row key={index}>
        <Col>{spell.spellName}</Col>
        <Col>{spell.Range}</Col>
        <Col>{spell.CastingTime}</Col>
        <Col>{spell.AdditionalDetail}</Col>
      </Row>
    )
 })
}


	render() {
		return (
      <div className="example">
      <Container className="dr-example-container">
        {this.renderTable()}
      </Container>
    </div>
		);
	}
}

export default App;
