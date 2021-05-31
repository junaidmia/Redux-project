import Home from "./Components/Home/Home";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Login from "./Components/Login/Login";
import { createContext, useState  } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddToCart from "./Components/AddToCart/AddToCart";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

export const UserContext = createContext();




function App() {
  const [loggedinUser , setLoggedinUser] = useState({});
  return (
    <div>
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
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

        <PrivateRoute path="/addToCart/:id">
          <ShoppingCart/>
        </PrivateRoute>

        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
