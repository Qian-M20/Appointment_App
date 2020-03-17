import React, {Component} from 'react';
import '../css/AppDetail.css';



class AppDetail extends Component {

    constructor(props) {
        super(props);
        this.state={};
        this.setState(
            this.state=props.theSelectedApp
            
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        // parse the state data to the app.js
        this.props.handleAppointment(this.state);
        this.props.exit();
    }


    // set state to the value of the input when user type in something
    onChange = (e) => {this.setState({[e.target.id]: e.target.value})};
    radioChange = (e) => {this.setState({action2: e.target.value})};




    render() { 
        return ( 
            <React.Fragment>

                <form>
                    <label>
                        <p>Lesson:</p>
                        <input id="desc" value={this.state.desc} type="text" onChange={this.onChange} />
                    </label>
                    <label>
                        <p>Initiator:</p>
                        <input id="name1" type="text" value={this.state.name1} onChange={this.onChange} />
                    </label>
                    <label className="Date">
                        <p>Date:</p>
                        <input type="date" value={this.state.date} id="date" name="trip-start"
                            min="2020-01-01" max="2020-12-31" onChange={this.onChange}></input>
                    </label>
                    <label className="startTime">
                        <p>Start Time:</p>
                        <input type="time" value={this.state.startTime} id="startTime" name="trip-start"
                            min="12AM" max="11PM" onChange={this.onChange}></input>
                    </label>
                    <label>
                        <p>End Time:</p>
                        <input type="time" value={this.state.endTime} id="endTime" name="trip-start"
                            min="12AM" max="11PM" onChange={this.onChange}></input>
                    </label>
                    
                    <label>
                        <p>Recipient:</p>
                        <input id="name2" value={this.state.name2} type="text" onChange={this.onChange} />
                    </label>
                        {/* <p>Answer: </p> */}

                    <label id="radioGroup">
                        <label>
                            <input onChange={this.radioChange} type="radio" id="confirmed" name="response" value="confirmed"/>
                            <i>Confirmed</i>
                        </label>
                        <label>
                            <input  onChange={this.radioChange} type="radio" id="rescheduled" name="response" value="rescheduled"/>
                            <i>Rescheduled</i>
                        </label>
                        <label>
                            <input  onChange={this.radioChange} type="radio" id="canceled" name="response" value="canceled"/>
                            <i>Canceled</i> 
                        </label>  
                    </label>
                        {/* <select id="action2" value={this.state.action2} onChange={this.onChange}>
                            <option value="">---------</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="rescheduled">Rescheduled</option>
                            <option value="canceled">Canceled</option>
                        </select> */}
                    <div className="buttonGroup">
                        <button id="saveBtn" className="button" value="Save" onClick={this.onSubmit}>Submit</button>
                        <input id="exitBtn" className="button" value="Exit" onClick={this.props.exit} readOnly/>
                    </div>

                </form>
                
            </React.Fragment>

            
        );
    }
}

export default AppDetail;