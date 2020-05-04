import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from 'react-router-dom';
import axios from "axios";

const RecordsList = props => (
  <tr>
    <td>{props.records.name}</td>
    <td>{props.records.description}</td>
    <td>{props.records.date.substring(0,10)}</td>
    <td>
      <Link to={"/view/"+props.records._id}>View</Link> | <a href="#" onClick={() => { props.deleteRecords(props.records._id) }}>delete</a>
    </td>
  </tr>
)

class Records extends Component {
  constructor(props) {
    super(props);

    this.deleteRecords = this.deleteRecords.bind(this)

    this.state = {records: []};
  }

  componentDidMount() {
    axios
    .get("/api/data/records")
    .then(response => {
      this.setState({ records: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteRecords(id) {
    axios.delete("/api/data/records/"+id)
      .then(response => { console.log(response.data)});
    this.setState({
      records: this.state.records.filter(el => el._id !== id)
    })
  }

  recordsList() {
    return this.state.records.map(currentRecords => {
      return <RecordsList records={currentRecords} deleteRecords={this.deleteRecords} key={currentRecords._id}/>;
    })
  }

  
  render() {
    return (
      <div className="container">
        <div>
          <h3>Tmobile Records</h3>
          <table className="striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.recordsList()}
            </tbody>
          </table>
        </div>        
      </div>
    );
  }
}

Records.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Records);
