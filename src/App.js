import React,{Component} from 'react';
import {Make,New} from './components/View';
import Form from './components/Form';

class App extends Component{
  render(){
    return(
     <div>
       {/* <Make />
       <New /> */}
       <Form />
     </div>
    )
  }
}

export default App;