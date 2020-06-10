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

  //already uploaded files will be shown as a list for conversion in canonical data.
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

  //calling an api to get canonical data from the database.
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

//handling change for radio button click.
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  //for view
  render() {
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
          <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dimensions">
          <a class="navbar-brand navbar-text" href="#">Prototype-3</a>
            </nav>
          </div>
            <div className="col-sm border-right">
            <h5 className="side-bar-text">
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
              <h2 className="margin-h2-top">View XL Import</h2>
              <h4 className="h4-text margin-h4-top">Select from below uploaded files: </h4>
              <form>
                {mapData}
                <button
                  type="submit"
                  className="btn btn-primary margin-details-top"
                  onClick={this.CanonicalHandler}
                >
                  Convert to Canonical Form
                </button>
              </form>

              <table className="table margin-details-top">
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
