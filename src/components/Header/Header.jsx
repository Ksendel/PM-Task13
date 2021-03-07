import {Link, Route, Switch} from "react-router-dom";
import React from "react";
import WeatherItems from "../Weather/WeatherItem/WeatherItem";
import {WEATHER} from "../Weather/config";
import '../Weather/Weather.css'
import Retrospective from "../Retrospective/Retrospective";
import Todos from "../Todos/Todos";
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='Header'>
            <nav>
                <ul>
                    <li><Link to='/weather'>Weather</Link></li>
                    <li><Link to='/retro'>Retrospective</Link></li>
                    <li><Link to='/todos'>Todos</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/weather'>
                    <div className="wrapper">
                        <WeatherItems weather={WEATHER}/>
                    </div>
                </Route>
                <Route path='/retro'>
                    <div className='wrapper'>
                        <Retrospective/>
                    </div>
                </Route>
                <Route exact path='/todos'><Todos/></Route>
            </Switch>
        </div>
    }
}

export default Header
