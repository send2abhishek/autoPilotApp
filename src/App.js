import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from "./Components/Container";
import Fileupload from "./Components/Fileupload";
import FileDetails from "./Components/fileDetails";
function App() {
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
