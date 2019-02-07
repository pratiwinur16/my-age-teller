import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';


export default class App extends Component {

  constructor(){
      super();
      this.state = {
          newDate : '',
          birthday : '1980-06-21',
          showStat : false 
      }
  }
  changeBirthday(){
      console.log(this.state);
      this.setState ({
          birthday : this.state.newDate,
          showStat : true
      });

  }

  render() {
    return (
      <div className="App">
        <Form inline>
            <h1>My Age Teller </h1>
            <h2>Input Your Birthday ! </h2>
            <FormControl 
                    type="date"
                    onChange = {event=>this.setState({newDate:event.target.value})}
            >
            </FormControl>
            {' '}
            <Button
                onClick = {()=>this.changeBirthday()}
            >
                Submit 
            </Button>
            {
                this.state.showStat ? 
                <div className="fade age-stats">
                    <AgeStats date={this.state.birthday}/>
                </div>
                
                : 
                <div>
                </div>
            }
        </Form>
      </div>
    )
  }
}
