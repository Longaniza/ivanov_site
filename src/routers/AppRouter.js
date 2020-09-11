import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ResumeScreen } from "../Components/ResumeScreen";
import { NavBar } from "../ui/NavBar";
import { ProjectsScreen } from "../Components/ProjectsScreen";

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
                            path="/projects" 
                            component={ProjectsScreen}
                        />
                    </Switch>
                </div>
            </Router>
        </>
    ); 
}