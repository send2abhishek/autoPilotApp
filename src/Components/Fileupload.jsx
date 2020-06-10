import React, { Component } from "react";
import axios from "../axios-instance";
class Fileupload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: "",
    };
  }

  //handler used to upload a file.
  avatarHandler = (e) => {
    this.setState({
      avatar: e.target.files[0],
    });
  };

  //clicking on upload will call this function which intern calls an api to save uploaded file information in the database.
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

  //for view
  render() {
    return (
      <div>
        <div className="container border">
          <div className="row">
          <div className="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dimensions">
          <a class="navbar-brand navbar-text" href="#">Prototype-2</a>
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
              <form>
                <div className="form-group margin-upload">
                  <h4>Upload File:</h4>
                  <br />
                  <input
                    type="file"
                    className="form-control choose-file-style"
                    id="file-id"
                    // value={avatar}
                    onChange={this.avatarHandler}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary button-style"
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
