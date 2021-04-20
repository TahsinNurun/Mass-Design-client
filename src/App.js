import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddReview from "./Components/DashboardCompo/AddReview/AddReview";
import BookList from "./Components/DashboardCompo/BookList/BookList";
import ManageServices from "./Components/DashboardCompo/ManageServices/ManageServices";
import Order from "./Components/DashboardCompo/Order/Order";
import Home from "./Components/HomeCompo/Home/Home";
import Login from "./Components/LoginCompo/Login/Login";
import PrivateRoute from "./Components/LoginCompo/PrivateRoute/PrivateRoute";
import AddService from "./Components/DashboardCompo/AddService/AddService";
import MakeAdmin from "./Components/DashboardCompo/MakeAdmin/MakeAdmin";
import OrderList from "./Components/DashboardCompo/OrderList/OrderList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
     
    <Router>
      <Link to="/"><button className="btn-brand">Home</button></Link>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path="/addService">
          <AddService></AddService>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/order/:_id">
          <Order ></Order>
        </PrivateRoute>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/bookList">
          <BookList></BookList>
        </Route>
        
        <Route path="/manageServices">
          <ManageServices></ManageServices>
        </Route>
        <Route path="/addReview">
          <AddReview></AddReview>
        </Route>
        <Route path="/orderList">
          <OrderList></OrderList>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
