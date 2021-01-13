
import React from "react";
import StartPage from './pages/start';
import Homepage from './pages/home';
import CreditsPage from './pages/credits';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';



class App extends React.Component {
  render() {
  
    return (
    
    
    
    <Router>
    
    
    <Switch>
    
    <Route path = '/' exact >
    <StartPage/>
    </Route>
    
    
    <Route path = '/credits/' >
    <CreditsPage/>
    </Route>
    
    
    <Route path = '/home/' >
    <Homepage/>
    </Route>
    
    
    
    
    </Switch>
    
    
    
    </Router>
   
    
        );
  }
}

export default App;
