import React, { Component } from "react";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = () => {
    this.props.history.replace("/uploadXs");
  };
  render() {
    return (
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
            <h2>View</h2>
            <br />
            <h4>Select method of upload: </h4>
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
              <br />
              <button
                type="submit"
                className="btn btn-primary"
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
