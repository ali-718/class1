import React,{Component} from 'react';
import {Make,New} from './components/View';
import Form from './components/Form';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './screens/Home';

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/about" component={Make} />
          <Route path="/view/new" component={Make} />
          <Route exact path="/view" component={New} />
        </Switch>
      </Router>
    )
  }
}

export default App;