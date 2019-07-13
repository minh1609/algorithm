import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:name" compomemt = {Package}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
