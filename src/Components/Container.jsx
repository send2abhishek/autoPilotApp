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
          <div className="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{"height":"45px"}}>
          <a class="navbar-brand" style={{"marginLeft":"37%"}} href="#">Prototype-1</a>
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
            <h2 >View</h2>
            <br />
            <h4 style={{color: 'grey', marginBottom:'12px'}}>Select method of upload: </h4>
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
                className="btn btn-primary" style={{"marginBottom":"10px"}}
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
