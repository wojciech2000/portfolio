import React, { Fragment } from 'react';

import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <Fragment>
      <Router>

      <Nav />

      <Route render={({location}) => (

              <AnimatePresence>
                  <Switch location={location} key={location.pathname}>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/contact' component={Contact}/>
                  </Switch>
                </AnimatePresence>
        )} />

      </Router>



    </Fragment>
  );
}

export default App;
