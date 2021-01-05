
import React from "react";
import StartPage from './pages/start';
import Homepage from './pages/home';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';



class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
    
    
    
    <Router>
    
    
    <Switch>
    
    <Route path = '/' exact >
    <StartPage/>
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
