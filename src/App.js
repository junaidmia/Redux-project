import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home> </Home>
        </Route>

        <Route path="/productDetails">
          <ProductDetails></ProductDetails>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
