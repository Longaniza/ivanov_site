import React from "react";
import {
  Switch,
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import { ResumeScreen } from "../Components/ResumeScreen";
import { NavBar } from "../ui/NavBar";
import { ProjectsScreen } from "../Components/ProjectsScreen";

export default function AppRouter() {
    console.log(process.env.PUBLIC_URL);
    return (
        <>
            <HashRouter>
                <NavBar/>
                <div>
                    <Switch>
                        <Route 
                            exact 
                            path={process.env.PUBLIC_URL + '/'} 
                            component={ResumeScreen}
                        />
                        <Route 
                            exact 
                            path={process.env.PUBLIC_URL + '/projects'}
                            component={ProjectsScreen}
                        />
                        <Redirect to={process.env.PUBLIC_URL + '/'}/>
                    </Switch>
                </div>
            </HashRouter>
        </>
    ); 
}