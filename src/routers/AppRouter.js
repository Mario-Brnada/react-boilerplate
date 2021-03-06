import React from "react";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </Router>
);

export default AppRouter;