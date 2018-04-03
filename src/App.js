import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact} from './components';
import { Route} from 'react-router-dom';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};





class App extends Component{
  constructor(){
    super();
  };




  
  render(){
    return(
    <div style={styles}><div>
    <Navigation /> 
      </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
  
  
}


export default App;
