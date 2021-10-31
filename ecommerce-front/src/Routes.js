import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Home from "./core/Home";
import AdminDashboard from "./user/AdminDashboard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";
import CreateCategory from "./admin/CreateCategory";
import AddProduct from "./admin/AddProduct";

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/signin" exact component={Signin} />
            <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            <AdminRoute path="/create/category" exact component={CreateCategory} />
            <AdminRoute path="/create/product" exact component={AddProduct} />
        </Switch>
    </Router>
)

export default Routes;