import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Skill from './pages/Skill';
import Formation from './pages/Formation';
import ExperiencePro from './pages/ExperiencePro';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch> 
          <Route path="/Contact" exact component={Contact}/>
          <Route path="/Skill" exact component={Skill}/>
          <Route path="/Formation" exact component={Formation}/>
          <Route path="/ExperiencePro" exact component={ExperiencePro}/>
          <Route component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;