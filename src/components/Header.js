import React, {Component}  from 'react';
import '../css/Header.css';
import DayGrids from './DayGrids';
// import hamburger2 from '../img/hamburger2close.gif';


class Header extends Component {
        render(){
            return (
                <header>
                    <div className='topNav'>

                        <div className="hamburgermenu">
                            {/* <img className="hamburger" data-click-state="1" src={hamburger} alt="Menu" /> */}
                        </div>

                        {/* <p>Hamburger Menu</p> */}
            
                        <div className='timeDisplay'>
                                <h2>{getMonth()}</h2>
                                <div>
                                    <h2 style={yearStyle}>{getYear()}</h2>
                                </div>
                        </div>
                        
                        <div className='plusSign' >
                            {/* <img className="plus" data-click-state="1" src={plusSign} alt="Menu" /> */}
                        </div>
                    </div>
    
                    <div className='bottomNav'>
                        <DayGrids timeLogs={this.props.timeLogs} toggleDayDisplay={this.props.toggleDayDisplay}/>
                        {/* <DateGrids datesOfWeek={this.state.dateOfWeek}/> */}
                    </div>
                </header>
            )
        }

        
}


const getMonth = ()=>{
    let now = new Date();
    let m = now.getMonth();
    let j = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return (j[m]);
}

const getYear = ()=>{
    let now = new Date();
    let y = now.getFullYear();
    return y;
}


const yearStyle ={
    float:'left',
    marginLeft:'1vw'
}



export default Header;