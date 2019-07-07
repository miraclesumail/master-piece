import logo from "./logo.svg";
import { Link, Route, Switch, NavLink } from "react-router-dom";
import { withRouter } from 'react-router'
import "./App.css";
import Home from './view/home'
import Finance from './view/finance'
import Person from './view/person'
import AccountDetail from './view/account'
import React, { Component } from "react";

interface RouteComponentProps<P> {
  match: any;
  location: any;
  history: any;
}

class App extends Component<{} & RouteComponentProps<{}>>{
  constructor(props:any){
      super(props);
  }

  render() {
    console.log(this.props.history);
    const location = this.props.history.location;
    return (
      <div>
        <ul className="footer">
          <li>
            <NavLink activeStyle={{color:'red'}} exact to="/">home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color:'red'}} exact to="/finance">finance</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{color:'red'}} isActive={(match, location) => {
                     console.log('match, ----, location');
                     if(location.pathname.includes('person'))
                        return true
                     return false
              }} exact to="/person">person</NavLink>
          </li>
        </ul>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/finance" component={Finance} />
           <Route exact path="/person" component={Person} />
           <Route exact path="/person/account" component={AccountDetail} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
