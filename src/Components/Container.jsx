import React, { Component } from "react";

class Container extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  //handling the next button which takes the selected option of upload to the file upload page.
  clickHandler = () => {
    this.props.history.replace("/uploadXs");
  };

  //for view
  render() {
    return (
      <div className="container border">
        <div className="row">
          <div className="col-sm-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dimensions">
          <a className="navbar-brand navbar-text" href="#">Prototype-1</a>
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
            <h2 className="margin-h2-top">View</h2>
            <h4 className="h4-text margin-h4-top">Select method of upload: </h4>
            <form>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="optradio"
                    value="option1"
                    checked
                  />
                  XL Upload
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label" for="radio2">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio2"
                    name="optradio"
                    value="option2"
                  />
                  Import from AD
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio3"
                    name="optradio"
                    value="option3"
                  />
                  Import from AM
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio4"
                    name="optradio"
                    value="option4"
                  />
                  Scan Import
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary button-style"
                onClick={() => this.clickHandler()}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
