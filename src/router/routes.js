import {Component} from 'react';
import { Router, Switch , Route } from "react-router";
import Header from "../components/container/header";
import Home from "../components/functional/home_component";
import history from '../utils/history';


class Routes extends Component {
    render(){
        return(
            <div>
                <Router history={history}>
                        <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routes;