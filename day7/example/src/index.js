import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Compohome';
import About from './Compoindex';
import Me from './CompoMe';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

{/* <App /> */ }
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/about/me/name" component={Me} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
