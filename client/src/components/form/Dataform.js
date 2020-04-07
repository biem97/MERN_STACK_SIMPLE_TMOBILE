import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class Dataform extends Component {
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
      accessories: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { user } = this.props.auth;

    const Data = {
      name: user.name,
      voice: this.state.voice,
      bts: this.state.bts,
      revenue: this.state.revenue,
      acc: this.state.acc,
      voicegoal: this.state.voicegoal,
      btsgoal: this.state.btsgoal,
      accgoal: this.state.accgoal,
      multiplier: this.state.multiplier,
      pre: this.state.pre,
      sim3: this.state.sim3,
      smart7: this.state.smart7,
      super11: this.state.super11,
      btsact: this.state.btsact,
      actrevenue: this.state.actrevenue,
      mpr: this.state.mpr,
      uso3: this.state.uso3,
      uso7: this.state.uso7,
      ua: this.state.ua,
      accessories: this.state.accessories,
    };

    axios
    .post("/api/data/submit", Data)
    .then(res => this.props.history.push("/dashboard"))
    .catch(err => console.log(err));
  }


  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "150vh" , width: "150vh"}} className="container valign-wrapper ">
        <div className="row">
          <form className="col s12" noValidate onSubmit={this.onSubmit}>
            <h3>Sales Focus Promos/Training</h3>         
            <div className="row">
              <div className="input-field col s6">
                <input 
                onChange={this.onChange}
                value={this.state.voice}
                id="voice" 
                type="number" 
                className="validate"
                />
                <label for="voice">Voice %</label>
              </div>
              <div className="input-field col s6">
                <input 
                onChange={this.onChange}
                value={this.state.bts}                
                id="bts" 
                type="number" 
                className="validate"
                />
                <label for="bts">BTS %</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input 
                onChange={this.onChange}
                value={this.state.revenue} 
                id="revenue" 
                type="number" 
                className="validate"/>
                <label for="revenue">Revenue %</label>
              </div>
              <div className="input-field col s6">
                <input 
                onChange={this.onChange}
                value={this.state.acc}
                id="acc" 
                type="number" 
                className="validate"/>
                <label for="acc">ACC %</label>
              </div>
            </div>

            <h3>Today's Goals</h3>         
            <div className="row">
              <div className="input-field col s6">
                <input 
                onChange={this.onChange}
                value={this.state.voicegoal}
                id="voicegoal" 
                type="number" 
                className="validate"/>
                <label for="voicegoal">Voice Goal</label>
              </div>
              <div className="input-field col s6">
                <input 
                onChange={this.onChange}
                value={this.state.btsgoal}
                id="btsgoal" 
                type="number" 
                className="validate"/>
                <label for="btsgoal">BTS Goal</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input 
                onChange={this.onChange}
                value={this.state.accgoal}
                id="accgoal" 
                type="number" 
                className="validate"/>
                <label for="accgoal">ACC Goal</label>
              </div>
              <div className="input-field col s6">
                <input
                onChange={this.onChange}
                value={this.state.multiplier}
                id="multiplier" 
                type="number" 
                className="validate"/>
                <label for="multiplier">Multiplier %</label>
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
                  <tr>Voice Acts
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.pre}
                    id="pre" 
                    type="number" 
                    className="validate"/></td>
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.sim3}
                    id="sim3" 
                    type="number" 
                    className="validate"/></td>
                    <td><input
                    onChange={this.onChange}
                    value={this.state.smart7}
                    id="smart7" 
                    type="number" 
                    className="validate"/></td>
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.super11}
                    id="super11" 
                    type="number" 
                    className="validate"/></td>
                  </tr>
                  <tr>BTS ACT
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.btsact}
                    id="btsact" 
                    type="number" 
                    className="validate"/></td>
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
                  <tr>Revenue
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.actrevenue}
                    id="actrevenue" 
                    type="number" 
                    className="validate"/></td>
                    <td><input
                    onChange={this.onChange}
                    value={this.state.mpr} 
                    id="mpr" 
                    type="number" 
                    className="validate"/></td>
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.uso3}
                    id="uso3" 
                    type="number" 
                    className="validate"/></td>
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.uso7}
                    id="uso7" 
                    type="number" 
                    className="validate"/></td>
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.ua}
                    id="ua" 
                    type="number" 
                    className="validate"/></td>
                  </tr>
                  <tr>ACCESSORIES
                    <td><input 
                    onChange={this.onChange}
                    value={this.state.accessories}
                    id="accessories" 
                    type="number" 
                    className="validate"/></td>
                  </tr>
                  </tbody>
                </table>

              </div>
            <br/>
            <br/>

            <div className="row">
              <div className="col s12">
                Employee
                <div className="input-field inline">
                  <input 
                  onChange={this.onChange}
                  disable ="true"
                  value = {user.name} 
                  id="name" 
                  type="text" 
                  className="validate"/>
                </div>
              </div>
            </div>
            <label>Date: </label>
            <div>
              <DatePicker
              
              selected= {new Date()}
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
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              type = "submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Submit
            </button>
          </form>       
        </div>
      </div>
    );
  }
}

Dataform.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dataform);
