import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CounterApp from './CounterApp';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, Router, Redirect} from 'react-router-dom';
import { createBrowserHistory} from "history";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
     <Route path="/app" component={App}　/>
     <Route path="/counterapp" component={CounterApp}　/>

     <Redirect from="/" to="/app"> 
     </Redirect>

    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
