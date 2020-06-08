import React, { Component } from "react";
import axios from "../axios-instance";
class Filedetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
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

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
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
    return (
      <div>
        <div className="container border">
          <div className="row">
            <div className="col-sm">
              <ul className="list-unstyled">
                <br />

                <li>
                  Dashboard
                  <ul>
                    <li>Global Template</li>
                    <li>Org</li>
                    <li>System Config</li>
                    <li>System Meta Dats</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="col-sm">
              <br />
              <h2>View XL Import</h2>
              <br />
              <h4>Select below uploaded file: </h4>
              <form>
                {mapData}

                <button type="submit" className="btn btn-primary">
                  Convert to Canonical Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filedetails;
