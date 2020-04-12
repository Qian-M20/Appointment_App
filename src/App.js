import React, {Component} from 'react';
import './css/App.css';
import Header from './components/Header';
import TimeGrids from './components/TimeGrids';
import calendar from './img/calendar.svg';
import {gsap,TweenMax,Power4} from 'gsap';


// import uuid from 'uuid';

// calculate the dates of the current week 
let curr = new Date();
let currDay = curr.getDay();
let currDate = curr.getDate();
let currW =[];
let tzoffset = curr.getTimezoneOffset() * 60000; 
let week = [];
let theCurrDates =  getDateOfWeek();

function getDateOfWeek(){

  for (let i = 0; i <= 6; i++) {
      let first = currDate - currDay + i;
      let day = new Date(curr.setDate(first)-tzoffset).toISOString().slice(0, 10);
      week.push(day);
  }
  
  week.forEach(dateOfWeek=>{
      
      currW.push(dateOfWeek.slice(8));
  })
  return currW;

}


// create app component 
class App extends Component {
  constructor(props){
    super(props);
    // this.myElement = null;
    this.myTween = null;
  }

  state = {
  timeLogs:[
    {
      id:0,
      day:"Sun",
      date:theCurrDates[0],
      state:false,
      appointments:
                  [{id:1, date:week[0],timeGrid:"07:00", startTime:"07:00"},
                  {id:2,  date:week[0],timeGrid:"08:00", startTime:"08:00"},
                  {id:3,  date:week[0],timeGrid:"09:00", startTime:"09:00"},
                  {id:4,  date:week[0],timeGrid:"10:00", startTime:"10:00"},
                  {id:5,  date:week[0],timeGrid:"11:00", startTime:"11:00"},
                  {id:6,  date:week[0],timeGrid:"12:00", startTime:"12:00"},
                  {id:7,  date:week[0],timeGrid:"13:00", startTime:"13:00"},
                  {id:8,  date:week[0],timeGrid:"14:00", startTime:"14:00"},
                  {id:9,  date:week[0],timeGrid:"15:00", startTime:"15:00"},
                  {id:10,  date:week[0],timeGrid:"16:00", startTime:"16:00"},
                  {id:11,  date:week[0],timeGrid:"17:00", startTime:"17:00"},
                  {id:12,  date:week[0],timeGrid:"18:00", startTime:"18:00"},
                  {id:13,  date:week[0],timeGrid:"19:00", startTime:"19:00"},
                  {id:14,  date:week[0],timeGrid:"20:00", startTime:"20:00"},
                  {id:15,  date:week[0],timeGrid:"21:00", startTime:"21:00"},
                  {id:16,  date:week[0],timeGrid:"22:00", startTime:"22:00"},
                  {id:16,  date:week[0],timeGrid:"23:00", startTime:"23:00"},]
      
    },{
      id:1,
      day:"Mon",
      date:theCurrDates[1],
      state:false,
      appointments:
                  [{id:1, date:week[1],timeGrid:"07:00", startTime:"07:00"},
                  {id:2,  date:week[1],timeGrid:"08:00", startTime:"08:00"},
                  {id:3,  date:week[1],timeGrid:"09:00", startTime:"09:00"},
                  {id:4,  date:week[1],timeGrid:"10:00", startTime:"10:00"},
                  {id:5,  date:week[1],timeGrid:"11:00", startTime:"11:00"},
                  {id:6,  date:week[1],timeGrid:"12:00", startTime:"12:00"},
                  {id:7,  date:week[1],timeGrid:"13:00", startTime:"13:00"},
                  {id:8,  date:week[1],timeGrid:"14:00", startTime:"14:00"},
                  {id:9,  date:week[1],timeGrid:"15:00", startTime:"15:00"},
                  {id:10,  date:week[1],timeGrid:"16:00", startTime:"16:00"},
                  {id:11,  date:week[1],timeGrid:"17:00", startTime:"17:00"},
                  {id:12,  date:week[1],timeGrid:"18:00", startTime:"18:00"},
                  {id:13,  date:week[1],timeGrid:"19:00", startTime:"19:00"},
                  {id:14,  date:week[1],timeGrid:"20:00", startTime:"20:00"},
                  {id:15,  date:week[1],timeGrid:"21:00", startTime:"21:00"},
                  {id:16,  date:week[1],timeGrid:"22:00", startTime:"22:00"},
                  {id:16,  date:week[1],timeGrid:"23:00", startTime:"23:00"},]

    },{
      id:2,
      day:"Tue",
      date:theCurrDates[2],
      state:false,
      appointments:
                  [{id:1, date:week[2],timeGrid:"07:00", startTime:"07:00"},
                  {id:2,  date:week[2],timeGrid:"08:00", startTime:"08:00"},
                  {id:3,  date:week[2],timeGrid:"09:00", startTime:"09:00"},
                  {id:4,  date:week[2],timeGrid:"10:00", startTime:"10:00"},
                  {id:5,  date:week[2],timeGrid:"11:00", startTime:"11:00"},
                  {id:6,  date:week[2],timeGrid:"12:00", startTime:"12:00"},
                  {id:7,  date:week[2],timeGrid:"13:00", startTime:"13:00"},
                  {id:8,  date:week[2],timeGrid:"14:00", startTime:"14:00"},
                  {id:9,  date:week[2],timeGrid:"15:00", startTime:"15:00"},
                  {id:10,  date:week[2],timeGrid:"16:00", startTime:"16:00"},
                  {id:11,  date:week[2],timeGrid:"17:00", startTime:"17:00"},
                  {id:12,  date:week[2],timeGrid:"18:00", startTime:"18:00"},
                  {id:13,  date:week[2],timeGrid:"19:00", startTime:"19:00"},
                  {id:14,  date:week[2],timeGrid:"20:00", startTime:"20:00"},
                  {id:15,  date:week[2],timeGrid:"21:00", startTime:"21:00"},
                  {id:16,  date:week[2],timeGrid:"22:00", startTime:"22:00"},
                  {id:16,  date:week[2],timeGrid:"23:00", startTime:"23:00"},]

    },{
      id:3,
      day:"Wed",
      date:theCurrDates[3],
      state:false,
      appointments:    
                  [{id:1, date:week[3],timeGrid:"07:00", startTime:"07:00"},
                  {id:2,  date:week[3],timeGrid:"08:00", startTime:"08:00"},
                  {id:3,  date:week[3],timeGrid:"09:00", startTime:"09:00"},
                  {id:4,  date:week[3],timeGrid:"10:00", startTime:"10:00"},
                  {id:5,  date:week[3],timeGrid:"11:00", startTime:"11:00"},
                  {id:6,  date:week[3],timeGrid:"12:00", startTime:"12:00"},
                  {id:7,  date:week[3],timeGrid:"13:00", startTime:"13:00"},
                  {id:8,  date:week[3],timeGrid:"14:00", startTime:"14:00"},
                  {id:9,  date:week[3],timeGrid:"15:00", startTime:"15:00"},
                  {id:10,  date:week[3],timeGrid:"16:00", startTime:"16:00"},
                  {id:11,  date:week[3],timeGrid:"17:00", startTime:"17:00"},
                  {id:12,  date:week[3],timeGrid:"18:00", startTime:"18:00"},
                  {id:13,  date:week[3],timeGrid:"19:00", startTime:"19:00"},
                  {id:14,  date:week[3],timeGrid:"20:00", startTime:"20:00"},
                  {id:15,  date:week[3],timeGrid:"21:00", startTime:"21:00"},
                  {id:16,  date:week[3],timeGrid:"22:00", startTime:"22:00"},
                  {id:16,  date:week[3],timeGrid:"23:00", startTime:"23:00"},]

    },{
      id:4,
      day:"Thu",
      date:theCurrDates[4],
      state:false,
      appointments:
                  [{id:1, date:week[4],timeGrid:"07:00", startTime:"07:00"},
                  {id:2,  date:week[4],timeGrid:"08:00", startTime:"08:00"},
                  {id:3,  date:week[4],timeGrid:"09:00", startTime:"09:00"},
                  {id:4,  date:week[4],timeGrid:"10:00", startTime:"10:00"},
                  {id:5,  date:week[4],timeGrid:"11:00", startTime:"11:00"},
                  {id:6,  date:week[4],timeGrid:"12:00", startTime:"12:00"},
                  {id:7,  date:week[4],timeGrid:"13:00", startTime:"13:00"},
                  {id:8,  date:week[4],timeGrid:"14:00", startTime:"14:00"},
                  {id:9,  date:week[4],timeGrid:"15:00", startTime:"15:00"},
                  {id:10,  date:week[4],timeGrid:"16:00", startTime:"16:00"},
                  {id:11,  date:week[4],timeGrid:"17:00", startTime:"17:00"},
                  {id:12,  date:week[4],timeGrid:"18:00", startTime:"18:00"},
                  {id:13,  date:week[4],timeGrid:"19:00", startTime:"19:00"},
                  {id:14,  date:week[4],timeGrid:"20:00", startTime:"20:00"},
                  {id:15,  date:week[4],timeGrid:"21:00", startTime:"21:00"},
                  {id:16,  date:week[4],timeGrid:"22:00", startTime:"22:00"},
                  {id:16,  date:week[4],timeGrid:"23:00", startTime:"23:00"},]

    },{
      id:5,
      day:"Fri",
      date:theCurrDates[5],
      state:false,
      appointments:
                  [{id:1, date:week[5],timeGrid:"07:00", startTime:"07:00"},
                  {id:2,  date:week[5],timeGrid:"08:00", startTime:"08:00"},
                  {id:3,  date:week[5],timeGrid:"09:00", startTime:"09:00"},
                  {id:4,  date:week[5],timeGrid:"10:00", startTime:"10:00"},
                  {id:5,  date:week[5],timeGrid:"11:00", startTime:"11:00"},
                  {id:6,  date:week[5],timeGrid:"12:00", startTime:"12:00"},
                  {id:7,  date:week[5],timeGrid:"13:00", startTime:"13:00"},
                  {id:8,  date:week[5],timeGrid:"14:00", startTime:"14:00"},
                  {id:9,  date:week[5],timeGrid:"15:00", startTime:"15:00"},
                  {id:10,  date:week[5],timeGrid:"16:00", startTime:"16:00"},
                  {id:11,  date:week[5],timeGrid:"17:00", startTime:"17:00"},
                  {id:12,  date:week[5],timeGrid:"18:00", startTime:"18:00"},
                  {id:13,  date:week[5],timeGrid:"19:00", startTime:"19:00"},
                  {id:14,  date:week[5],timeGrid:"20:00", startTime:"20:00"},
                  {id:15,  date:week[5],timeGrid:"21:00", startTime:"21:00"},
                  {id:16,  date:week[5],timeGrid:"22:00", startTime:"22:00"},
                  {id:16,  date:week[5],timeGrid:"23:00", startTime:"23:00"},]

    },{
      id:6,
      day:"Sat",
      date:theCurrDates[6],
      state:false,
      appointments:
                  [{id:1, date:week[6],timeGrid:"07:00", startTime:"07:00"},
                  {id:2,  date:week[6],timeGrid:"08:00", startTime:"08:00"},
                  {id:3,  date:week[6],timeGrid:"09:00", startTime:"09:00"},
                  {id:4,  date:week[6],timeGrid:"10:00", startTime:"10:00"},
                  {id:5,  date:week[6],timeGrid:"11:00", startTime:"11:00"},
                  {id:6,  date:week[6],timeGrid:"12:00", startTime:"12:00"},
                  {id:7,  date:week[6],timeGrid:"13:00", startTime:"13:00"},
                  {id:8,  date:week[6],timeGrid:"14:00", startTime:"14:00"},
                  {id:9,  date:week[6],timeGrid:"15:00", startTime:"15:00"},
                  {id:10,  date:week[6],timeGrid:"16:00", startTime:"16:00"},
                  {id:11,  date:week[6],timeGrid:"17:00", startTime:"17:00"},
                  {id:12,  date:week[6],timeGrid:"18:00", startTime:"18:00"},
                  {id:13,  date:week[6],timeGrid:"19:00", startTime:"19:00"},
                  {id:14,  date:week[6],timeGrid:"20:00", startTime:"20:00"},
                  {id:15,  date:week[6],timeGrid:"21:00", startTime:"21:00"},
                  {id:16,  date:week[6],timeGrid:"22:00", startTime:"22:00"},
                  {id:16,  date:week[6],timeGrid:"23:00", startTime:"23:00"},]

    }
  ]}

   // Toggle day display 
  toggleDayDisplay = (id) => {
    this.setState({timeLogs: this.state.timeLogs.map(timeLog => {
      timeLog.state = false;
      if(timeLog.id === id){
        timeLog.state = true;
      }
      return timeLog;
    })});
  }


    // handle appointment change, take the input values and set the new state in the corresponding timegrid 
    handleAppointment = (object)=> {

      let dateRegistered = object.date.slice(8, 10);
      let timeRegistered = object.startTime.slice(0,2);
      document.querySelector('.TimeGridItem').style.display="block";
      document.querySelector('.appContainer').style.display="none";
      // take the input value and change the state of corresponding time grid
      this.setState({timeLogs:this.state.timeLogs.map(timeLog=>{
        if(timeLog.date===dateRegistered){
          timeLog.appointments.map(app=>{
            if(app.startTime.slice(0,2)===timeRegistered){
                app.name1=object.name1;
                app.startTime=object.startTime;
                app.endTime=object.endTime;
                app.desc=object.desc;
                app.name2=object.name2;
                app.action2=object.action2;
            }
          })
        }
        return timeLog;
      })})


    }

  // display the current day when the app loads
  componentDidMount(){
    document.querySelector('.mainContainer').style.opacity="0";

    // TweenMax.to(window, 1, {scrollTo:0, ease:Power4.easeOut});

    this.myTween = TweenMax.fromTo('.slashPage', 3, {opacity: 0}, {opacity:1});

    this.myTween = TweenMax.to('.slashPage', 1, {opacity:0, delay:3, display:'none', ease:Power4.easeInOut});

    this.myTween = TweenMax.to('.mainContainer',3, {opacity:'1', delay:3, ease:Power4.easeInOut});




    this.setState({timeLogs: this.state.timeLogs.map(timeLog => {
      if(timeLog.id === currDay){
        timeLog.state = true
      }
      return timeLog;
    })});
  }

  render(){
    return (
      <div className="App">
        <div className="slashPage">
              <div className="calendar"><img className="calendarLogo" data-click-state="1" src={calendar} alt="calendar_logo" /></div>
              <div className='appDesc'><p>Online Lesson Scheduling App</p></div>
        </div>

        <div className="mainContainer">
          <Header className="mainHeader" timeLogs={this.state.timeLogs} toggleDayDisplay={this.toggleDayDisplay}/>
          
          <div className="TimeGrids">
            <TimeGrids timeLogs={this.state.timeLogs} handleAppointment={this.handleAppointment}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
