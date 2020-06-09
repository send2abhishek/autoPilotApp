import React, { Component } from "react";
import axios from "../axios-instance";
class Filedetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      CanonicalData: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("/")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  CanonicalHandler = (e) => {
    e.preventDefault();
    axios
      .get("/convertToCanonicalData")
      .then((response) => {
        console.log("response is", response.data);
        this.setState({
          CanonicalData: response.data.systemInfo.SystemmetadataDetails,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    console.log("sys data", this.state.CanonicalData);
    let mapData =
      this.state.data.length > 0 ? (
        this.state.data.map((data, index) => {
          return (
            <div key={index} className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  value={data.title}
                  onChange={this.handleChange}
                  checked={this.state.name === data.title}
                />
                {data.title}
              </label>
            </div>
          );
        })
      ) : (
        <p>No items Found</p>
      );

    let tableData =
      this.state.CanonicalData.length > 0 ? (
        this.state.CanonicalData.map((data, index) => {
          return (
            <tr>
              <td>{data.SystemName}</td>
              <td>{data.OperationSystem}</td>
              <td>{data.Capacity}</td>
              <td>{data.RAM}</td>
              <td>{data.ROM}</td>
            </tr>
          );
        })
      ) : (
        <p></p>
      );

    return (
      <div>
        <div className="container border">
          <div className="row">
          <div className="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{"height":"45px"}}>
          <a class="navbar-brand" style={{"marginLeft":"37%"}} href="#">Prototype-3</a>
            </nav>
          </div>
            <div className="col-sm border-right">
            <h5 style={{color: 'grey'}}>
              <ul className="list-unstyled">
                <br />

                <li>
                  Dashboard
                  <ul>
                    <li>Global Template</li>
                    <li>Org</li>
                    <li>System Config</li>
                    <li>System Meta Data</li>
                  </ul>
                </li>
              </ul>
              </h5>
            </div>

            <div className="col-sm-7">
              <br />
              <h2>View XL Import</h2>
              <br />
              <h4 style={{color: 'grey', marginBottom:'15px'}}>Select from below uploaded files: </h4>
              <form>
                {mapData}

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.CanonicalHandler}
                >
                  Convert to Canonical Form
                </button>
              </form>

              <table className="table">
                {this.state.CanonicalData.length > 0 ? (
                  <thead>
                    <tr>
                      <th>SystemName</th>
                      <th>OperationSystem</th>
                      <th>Capacity</th>
                      <th>RAM</th>
                      <th>ROM</th>
                    </tr>
                  </thead>
                ) : null}
                <tbody>{tableData}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filedetails;
