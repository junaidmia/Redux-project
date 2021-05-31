import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home> </Home>
        </Route>

        <Route path="/productDetails/:id">
          <ProductDetails></ProductDetails>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
