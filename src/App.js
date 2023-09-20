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
          <Route path="/UrlParametersFrom" element={<UrlParamsFrom />}/>
          <Route path="/UrlParametersTo/:tabNum?" element={<UrlParamsTo />}/>
          <Route path="/StateTo" element={<StateTo />}/>
          <Route path="/StateFrom" element={<StateFrom />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
