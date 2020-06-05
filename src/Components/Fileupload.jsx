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
    this.setState({
      avatar: e.target.files[0],
    });
  };
  handleSubmitAvatar = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("name", this.state.avatar);
    formData.append("title", "demo file");
    axios
      .post("/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("file uploaded");
      })
      .catch((err) => alert("something went wrong"));
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <form>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="file"
                    className="form-control"
                    id="file-id"
                    // value={avatar}
                    onChange={this.avatarHandler}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
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
