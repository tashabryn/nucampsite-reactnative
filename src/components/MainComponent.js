import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Background from './BackgroundComponent';
import Location from './LocationComponent';
import Kitties from './MeetKittiesComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Header />
                <Background />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/kitties' component={Kitties}/>
                    <Redirect to='/home' />
                </Switch>
                <Kitties />
                <Location />
                <Footer />
            </div>
        );
    }
}

export default Main;