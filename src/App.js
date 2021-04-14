import React from 'react';
import './App.css';
import {Content} from './Content';
import {Header} from './Header';
import {AddEmployee} from './AddEmployee';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
     return (
        <div>
           <Router>
         <Header/>
         <Switch>
            <Route
               path='/add-emp'
               exact={true}
               component={AddEmployee}/>
         </Switch>
         <Switch>
            <Route
               path='/'
               exact={true}
               component={Content}/>
         </Switch>
         {/* <Content/> */}
         </Router>
        </div>
     );
  }
}

export default App;