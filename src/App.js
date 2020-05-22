import React, { Fragment } from 'react';
import './App.css'

import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  return (
    <Fragment>
      <Router>

      <Nav />

      <Route render={({location}) => { 
                        
          return(
                    
            <TransitionGroup>
                <CSSTransition key={location.key} timeout={300} classNames="fade">
                    
                <Switch location={location}>
                    
                  <Route path='/' exact component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/skills' component={Skills}/>
                  <Route path='/projects' component={Projects}/>
                  <Route path='/contact' component={Contact}/>
                    
                </Switch>
                    
                </CSSTransition>
            </TransitionGroup>
                    
        )}} />

      </Router>



    </Fragment>
  );
}

export default App;
