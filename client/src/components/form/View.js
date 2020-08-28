import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class View extends Component {
  constructor()
  {
    super();
    this.state = {
      name: "",
      voice: "",
      bts: "",
      revenue: "",
      acc: "",
      voicegoal: "",
      btsgoal: "",
      accgoal: "",
      multiplier: "",
      pre: "",
      sim3: "",
      smart7: "",
      super11: "",
      btsact: "",
      actrevenue: "",
      mpr: "",
      uso3: "",
      uso7: "",
      ua: "",
      accessories: "",
      userID: "",
      description: "None",
      date: ""
    };
  }
  componentDidMount() {
    axios
    .get("/api/data/view/" + this.props.match.params.id)
      .then(response => {
        this.setState({
            name: response.data.name,
            voice: response.data.voice,
            bts: response.data.bts,
            revenue: response.data.revenue,
            acc: response.data.acc,
            voicegoal: response.data.voicegoal,
            btsgoal: response.data.btsgoal,
            accgoal: response.data.accgoal,
            multiplier: response.data.multiplier,
            pre: response.data.pre,
            sim3: response.data.sim3,
            smart7: response.data.smart7,
            super11: response.data.super11,
            btsact: response.data.btsact,
            actrevenue: response.data.actrevenue,
            mpr: response.data.mpr,
            uso3: response.data.uso3,
            uso7: response.data.uso7,
            ua: response.data.ua,
            accessories: response.data.accessories,
            userID: response.data.userID,
            description: response.data.description,
            date: response.data.date
          })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {
    return (
      <div className="container ">
        <div className="row">
          <form className="col s12" noValidate onSubmit={this.onSubmit}>
            <h3>Sales Focus Promos/Training</h3>         
            <div className="row">
              <div className="col s6">
              <label htmlFor="voice">Voice %</label>
                <input 
                value={this.state.voice}
                id="voice" 
                type="number" 
                disable ="true"
                readOnly
                />
              </div>
              <div className="col s6">
              <label htmlFor="bts">BTS %</label>
                <input 
                value={this.state.bts}                
                id="bts" 
                type="number" 
                required={true}
                readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className="col s6">
              <label htmlFor="revenue">Revenue %</label>  
                <input
                value={this.state.revenue} 
                id="revenue" 
                type="number" 
                className="validate"
                readOnly
                required={true}/>
              </div>
              <div className=" col s6">
              <label htmlFor="acc">ACC %</label>  
                <input 
                value={this.state.acc}
                id="acc" 
                type="number" 
                className="validate"
                readOnly
                required={true}/>
              </div>
            </div>

            <h3>Today's Goals</h3>         
            <div className="row">
              <div className=" col s6">
              <label htmlFor="voicegoal">Voice Goal</label>
                <input 
                value={this.state.voicegoal}
                id="voicegoal" 
                type="number" 
                readOnly
                className="validate"
                required={true}/>
              </div>
              <div className=" col s6">
              <label htmlFor="btsgoal">BTS Goal</label>  
                <input 
                value={this.state.btsgoal}
                id="btsgoal" 
                type="number" 
                className="validate"
                readOnly
                required={true}/>
                
              </div>
            </div>
            <div className="row">
              <div className=" col s6">
              <label htmlFor="accgoal">ACC Goal</label>  
                <input 
                value={this.state.accgoal}
                id="accgoal" 
                type="number" 
                className="validate"
                readOnly
                required={true}/>
              </div>
              <div className=" col s6">
              <label htmlFor="multiplier">Multiplier %</label>
                <input
                value={this.state.multiplier}
                id="multiplier" 
                type="number" 
                className="validate"
                readOnly
                required={true}/>
              </div>
            </div>

            <h3>Mobile Expert Quick Connect</h3>
              <div>
                <table className="responsive-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Pre</th>
                    <th>Sim Only 3$</th>
                    <th>Smart Pick 7$</th>
                    <th>Super Phone 11$</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
                    <td>Voice Acts</td>
                    <td><input 
                    
                    value={this.state.pre}
                    id="pre" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                    <td><input 
                    
                    value={this.state.sim3}
                    id="sim3" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                    <td><input
                    
                    value={this.state.smart7}
                    id="smart7" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                    <td><input 
                    
                    value={this.state.super11}
                    id="super11" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                  </tr>
                  <tr>
                    <td>BTS ACT</td>
                    <td><input 
                    
                    value={this.state.btsact}
                    id="btsact" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                  </tr>
                  </tbody>
                </table>
                <br/>
                <br/>
                <table className="table">
                  <thead>
                    <tr>
                    <th></th>
                    <th>Act Revenue</th>
                    <th>Magenta Plus Revenue</th>
                    <th>Upgrade SmartPick OPP 3$</th>
                    <th>Upgrade SuperPhone OPP 7$</th>
                    <th>Upgrade Actual $</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Revenue</td>
                    <td><input 
                    readOnly
                    value={this.state.actrevenue}
                    id="actrevenue" 
                    type="number" 
                    className="validate"
                    required={true}/></td>
                    <td><input
                    value={this.state.mpr} 
                    id="mpr" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                    <td><input 
                    value={this.state.uso3}
                    id="uso3" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                    <td><input 
                    value={this.state.uso7}
                    id="uso7" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                    <td><input 
                    value={this.state.ua}
                    id="ua" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}
                    /></td>
                  </tr>
                  <tr>
                    <td>ACCESSORIES</td>
                    <td><input 
                    
                    value={this.state.accessories}
                    id="accessories" 
                    type="number" 
                    className="validate"
                    readOnly
                    required={true}/></td>
                  </tr>
                  </tbody>
                </table>

              </div>
            <br/>
            <br/>

            <div className="row">
              <div className="col s12">
                Employee
                <div className=" inline">
                  <input 
                  disable ="true"
                  value = {this.state.name} 
                  id="name" 
                  type="text" 
                  readOnly
                  className="validate"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                Description
                <div className="">
                  <input 
                  disable ="true"
                  value = {this.state.description} 
                  id="description" 
                  type="text" 
                  readOnly
                  className="text"/>
                </div>
              </div>
            </div>
            <label>Date: </label>
            <div>
              <DatePicker
                  disable ="true"
                  value = {this.state.date.substring(0,10)} 
              />
            </div>
            <Link
              to='/dashboard'
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginRight: "5rem",
                marginLeft: "30rem"
              }}        
              className="btn btn-large waves-effect waves-light hoverable red accent-3"
            >
              Back
            </Link>
          </form>       
        </div>
      </div>
    );
  }
}

View.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(View);
