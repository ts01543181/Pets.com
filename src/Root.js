import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import App from "./components/App";

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={LoginContainer} />
                    <Route exact path="/signup" component={SignupContainer}/>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default Root;