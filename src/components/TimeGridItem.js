import React, {Component} from 'react';
import '../css/TimeGridItem.css'


class TimeGridItem extends Component {
    

    getClassName = (action2)=> {
        if (action2==="confirmed"){
            return 'eventConfirmed'
        }else if(action2==="rescheduled"){
            return 'eventRescheduled'
        }else if(action2==="canceled"){
            return 'eventCanceled'
        }else{
            return 'event'
        }
    }
    getStyle = (app) => {
        // caculate the duration from startTime to endTime
        let moment = require('moment');
        // parse time using 24-hour clock and use UTC to prevent DST issues
        var start = moment.utc(app.startTime, "HH:mm");
        var end = moment.utc(app.endTime, "HH:mm");

        // account for crossing over to midnight the next day
        if (end.isBefore(start)) end.add(1, 'day');

        // calculate the duration
        var d = moment.duration(end.diff(start));

        // format a string result
        var s = moment.utc(+d).format('H:mm');
        let a = s.split(/[:]/);

        // convert the duration into hours
        let dh = (+a[0])+(+a[1])/60;
        let dhinHeight = dh*120;


        let hoursMinutes = app.startTime.split(/[:]/);
        // let hours = parseInt(hoursMinutes[0], 10);
        let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        let marginTop = (minutes/60)*120;

        // determine the bg color 
        let bgColor; 
        if(app.action2== undefined){
            bgColor = "#638680"
        }
        else if(app.action2==="confirmed"){
            bgColor = "#482637"
        }else if(app.action2==="rescheduled"){
            bgColor ="#5E679E"
        }else if(app.action2==="canceled"){
            bgColor = "#383838"
        }

        return {
            height:`${dhinHeight}px`,
            backgroundColor:`${bgColor}`,
            display:'flex',
            alignItems:'center',
            marginTop:`${marginTop}px`,
            position:'relative',
            width:'100%',
            borderRadius: '1rem'

        }

    }

    render(){

        return(
            <div className="gridContainer">
                <p className="title">{this.props.theSelectedApp.timeGrid}</p>
                <div className="timeGrid" onClick={this.props.setAppointment}>
                        <React.Fragment>
                            <div style={this.getStyle(this.props.theSelectedApp)} className={`eventGroup_${this.props.theSelectedApp.date}_${this.props.theSelectedApp.id}`}>
                                <div className={this.props.theSelectedApp.name1 ? 'eventGroup' : 'appNotCreated'}>
                                    <div className='event name1'><span className="name1">{this.props.theSelectedApp.name1}</span></div>
                                    <div className='event desc'>{this.props.theSelectedApp.desc}</div>
                                    <div className={this.props.theSelectedApp.name1 ? 'event time' : 'appNotCreated'}>{this.props.theSelectedApp.startTime}{" to "}{this.props.theSelectedApp.endTime}</div> 
                                    <div className={this.getClassName(this.props.theSelectedApp.action2)}><span className="name2">{this.props.theSelectedApp.name2}</span>{" "}{this.props.theSelectedApp.action2}</div>
                                </div>
                            </div>
                        </React.Fragment>

                </div>
                
                
            </div>
        )

    }


}



export default TimeGridItem;