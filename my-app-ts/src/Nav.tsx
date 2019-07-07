import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom';
//import './declare_modules.d'
import App from './App'
import Home from './Home'
  
const FadingRoute = ({ component: Home, ...rest }) => (
  <Route {...rest} render={prop => {
         const props= {...prop, name:'sss'}
         return       <Home {...props}/>
      }
  }/>
)

const Main = () => (
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <FadingRoute path='/home' component={Home}/>
                </Switch>
            </BrowserRouter>
        </main>
)

export default Main