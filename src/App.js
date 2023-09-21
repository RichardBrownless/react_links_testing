import UrlParamsTo from "./Pages/UrlParamsTo";
import UrlParamsFrom from "./Pages/UrlParamsFrom";
import StateTo from "./Pages/StateTo";
import StateFrom from "./Pages/StateFrom";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/UrlParametersFrom" >Use URL Parameters</Link>
          <> | </>
          <Link to="/StateFrom" >Use State</Link>
        </div>
        <Routes>
          <Route path="/"></Route>
          {/*page containing links that use URL parameters to pass data*/}
          <Route path="/UrlParametersFrom" element={<UrlParamsFrom />}/>
          {/*path contains optional parameter to specify tab to switch to*/}
          <Route path="/UrlParametersTo/:tabNum?" element={<UrlParamsTo />}/>
          {/*page containing links that use location state to pass data*/}
          <Route path="/StateFrom" element={<StateFrom />}/>
          {/*page that receives location state data to specify tab to switch to*/}
          <Route path="/StateTo" element={<StateTo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
