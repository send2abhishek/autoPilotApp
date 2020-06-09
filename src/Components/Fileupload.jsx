import React, { Component } from "react";
import axios from "../axios-instance";
class Fileupload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "",
    };
  }
  avatarHandler = (e) => {
    console.log("abc", e.target.files[0]);
    this.setState({
      avatar: e.target.files[0],
    });
  };
  handleSubmitAvatar = (e) => {
    e.preventDefault();
    let formData = new FormData();
    console.log("data", this.state.avatar);
    formData.append("name", this.state.avatar);
    formData.append("title", this.state.avatar.name);
    axios
      .post("/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        this.props.history.replace("/uploads");
      })
      .catch((err) => alert("File format not supported. Only .xlsx, .pdf and .doc are supported."));
  };
  render() {
    return (
      <div>
        <div className="container border">
          <div className="row">
          <div className="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{"height":"45px"}}>
          <a class="navbar-brand" style={{"marginLeft":"37%"}} href="#">Prototype-2</a>
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
              <form>
                <div className="form-group" style={{"marginTop":"10px"}}>
                  <h4>Upload File:</h4>
                  <br />
                  <input
                    type="file"
                    className="form-control" style={{"paddingTop": "1.275rem",
                      "paddingRight": "0.75rem",
                      "paddingBottom": "2.975rem",
                      "paddingLeft": "0.75rem"}}
                    id="file-id"
                    // value={avatar}
                    onChange={this.avatarHandler}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary" style = {{"marginBottom":"8px"}}
                  onClick={this.handleSubmitAvatar}
                  data-dismiss="modal"
                >
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fileupload;
