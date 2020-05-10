import React, { Component } from "react";
//import PropTypes from "prop-types";
import {Line} from 'react-chartjs-2';
//import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from 'react-router-dom';
import axios from "axios";


const state = {
  //labels: [records.name],
  labels: ['5/1', '5/2', '5/3',
          '5/4', '5/5','5/6','5/7','5/8','5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/16','5/17','5/18','5/19','5/20','5/21','5/22','5/23','5/24','5/25','5/26','5/27','5/28','5/29','5/30','5/31'],
  datasets: [
    {
      label: 'Items Sold',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [5, 8, 10, 15, 7,5,4,8,9,9,9,8,5,4,6,8,7,8,7,8,10,11,15,6,6,7,9,10,12,11,9]
    }
  ]
}

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {records: []};
  }
  //retrieve data from cloud MongoDB
  componentDidMount() {
    axios
    .get("/api/data/records")
    .then(response => {
      this.setState({ records: response.data })
      console.log(this.state.records)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Items You Have Sold Per Day By Employee',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

Charts.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Charts);