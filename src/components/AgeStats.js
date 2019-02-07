import React, { Component } from 'react'
import partyPopper from '../assets/party-pooper.jpg';
export default class AgeStats extends Component {
  timeSince(date){
      let today = new Date().getTime();
      let other_day = new Date(date).getTime();
      let difference = Math.abs(today - other_day);
      let days = Math.floor(difference / (1000*3600*24)); //didapatkanlah hari 
      let years = Math.floor(days/365);//didapatkan tahun 
    //   days -= years*365 ;
      days = days -(years*365);
      let months = Math.floor(days/31);
      days -= months * 31 ; 


      return `${years} years, ${months} months, ${days} days`

  }

  
  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h2>Congrats On {this.timeSince(this.props.date)} !!! </h2>
        <img src={partyPopper} alt="Party Pooper" className="img"></img>

      </div>
    )
  }
}
