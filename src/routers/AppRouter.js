import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ResumeScreen } from "../Components/ResumeScreen";
import { AboutMeScreen } from "../Components/AboutMeScreen";
import { ContactMeScreen } from "../Components/ContactMeScreen";
import { NavBar } from "../ui/NavBar";

export default function AppRouter() {
    return (
        <>
            <Router>
                <NavBar/>
                <div>
                    <Switch>
                        <Route 
                            exact 
                            path="/" 
                            component={ResumeScreen}
                        />
                        <Route 
                            exact 
                            path="/about" 
                            component={AboutMeScreen}
                        />
                        <Route 
                            exact 
                            path="/contact" 
                            component={ContactMeScreen}
                        />
                    </Switch>
                </div>
            </Router>
        </>
    ); 
}