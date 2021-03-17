import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { NavVar } from "./NavBar";
import {AboutScreen} from './AboutScreen';
import {LoginScreen} from './LoginScreen';
import {HomeScreen }from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavVar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        <Route exact path="/about" component={AboutScreen} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}