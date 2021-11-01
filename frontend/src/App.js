import Admin from "./pages/admin/admin";
import Main from "./pages/main/main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/login/login";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Main/>
      </Route>
      <Route path='/settings'>
        <Admin/>
      </Route>
      <Route path='/login/:id'>
        <Login/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
