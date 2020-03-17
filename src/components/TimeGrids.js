import React, {Component} from 'react';
import TimeGridItem from './TimeGridItem';
import AppDetail from './AppDetail';




class TimeGrids extends Component {

    // controls what happends when click on each timegrid 
    setAppointment = (appointment)=> {

        const elements = document.querySelectorAll(`.TimeGridItem`);
        [...elements].forEach((item)=>{
            item.style.display = 'none'
        });

        // document.querySelector(`.TimeGridItem_${appointment.id}`).style.border="2px solid red";

        document.querySelector(`.appContainer_${appointment.id}`).style.display="block";
    }

    exit = (appointment) => {

        const elements = document.querySelectorAll(`.TimeGridItem`);
        [...elements].forEach((item)=>{
            item.style.display = 'block'
        });

        // document.querySelector(`.TimeGridItem_${appointment.id}`).style.border="none";
        document.querySelector(`.appContainer_${appointment.id}`).style.display="none";
        document.querySelector('#name1').value='';
        document.querySelector('#endTime').value='';
        document.querySelector('#desc').value='';
        document.querySelector('#name2').value='';
        // document.querySelector('#action2').value='';
    }

    render(){
        
        // return this.props.timeLogs.filter(timelog => timelog.state === true)[0].appointments.forEach((appointment)=>{
        //         <TimeGridItem key={appointment.id} title={appointment.timeGrids}/>
        // })
        return this.props.timeLogs.map((timeLog) => {
            if (timeLog.state===true) {
                return (
                    timeLog.appointments.map((appointment)=>
                        <React.Fragment>
                            <div className={`TimeGridItem_${appointment.id} TimeGridItem`}><TimeGridItem key={appointment.id} setAppointment={this.setAppointment.bind(this,appointment)} theSelectedApp={appointment}/></div>
                            <div className={`appContainer_${appointment.id} appContainer`}>
                                <AppDetail key={appointment.id} handleAppointment={this.props.handleAppointment} theSelectedApp = {appointment} exit={this.exit.bind(this,appointment)}/>
                            </div>
                        </React.Fragment>
                    )
                )
            }
        });

    }
}
export default TimeGrids;