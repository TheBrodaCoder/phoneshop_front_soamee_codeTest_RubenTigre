import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.png';
import Head from './comps/head/head';
import About from './comps/about/about';
import Home from './comps/home/home';



function App() {
  return (
    <div className="App">
      <Head/>
      <BrowserRouter>
        <div className='NavBar'>
            <div className='NavBar_left'>
                <img alt='logo' src={logo}>
                </img>
            </div>

             <div className='NavBar_right'>
                 <div className='navBar_right_links'>
                    <Link exact='true' to="/">Home</Link>
                    <Link to="/about">About</Link>
                 </div>
             </div>
        </div>
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
