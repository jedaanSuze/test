import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';
import Navigation from "./components/Navigation";
import { firebase } from '../firebase/index';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    render() {
        return (
            <div>
                <Navigation authUser={this.state.authUser}/>
                <hr/>
                {renderRoutes(this.props.route.routes)}

            </div>
        );
    }
}

export default {
    component: App,
};
