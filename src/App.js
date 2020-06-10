import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "./Components/Container";
import Fileupload from "./Components/Fileupload";
import FileDetails from "./Components/fileDetails";
import './App.css';

function App() {

  //different routes of the application are defined.
  //props are used as properties of react router dom.
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Container}></Route>
          <Route
            path="/uploadXs"
            render={(props) => <Fileupload {...props} />}
          />
          <Route
            path="/uploads"
            render={(props) => <FileDetails {...props} />}
          />
          <Route path="*" render={(props) => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
