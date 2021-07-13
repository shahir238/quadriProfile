import Edit from "../component/edit";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../content/main";
export default function Routes() {
  //Route are used for the page router just like a link.
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/edit" component={Edit} />
    </Router>
  );
}
