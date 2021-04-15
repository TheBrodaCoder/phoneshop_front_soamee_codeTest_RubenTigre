import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.png';
import Head from './comps/head/head';
import About from './comps/about/about';
import Home from './comps/home/home';
import Footer from './comps/footer/footer';



function App() {
  return (
    <div className="App">
      <Head/>
      <BrowserRouter>
        <div className='NavBar'>
            <div className='NavBar_left'>
                <img alt='logo' src={logo}/>
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
            <div className='about_block'><About/></div>
            
          </Route>
          <Route exact path="/">
            <div className='home_block'><Home/></div>
          </Route>
        </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
