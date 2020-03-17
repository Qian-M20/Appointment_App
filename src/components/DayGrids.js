import React, {Component}  from 'react';
import '../css/DayGrids.css';


// const now = new Date();
// let d =now.getDate();



class DayGrids extends Component {


    render() { 
        return (
            <React.Fragment>
            <div className='dayRow'>
                {this.props.timeLogs.map(timeLog=>( 
                    <div className='dayRow' key={timeLog.id}>{timeLog.day}</div>
                ))}
            </div>
            <div className='dateRow'>
                {this.props.timeLogs.map(timeLog=>( 
                <div className='dateRow' key={timeLog.id}>
                    <div className={timeLog.state === true ? 'dateGrid active' : 'dateGrid'} onClick={this.props.toggleDayDisplay.bind(this,timeLog.id)} >
                        {timeLog.date}
                    </div>
                </div>
                ))}
            </div>
            </React.Fragment>
        )
        
    }
}

export default DayGrids;