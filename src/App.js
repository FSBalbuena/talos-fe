import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import AllPostsContainer from './containers/AllPostsContainer'
import HeaderContainer from './containers/HeaderContainer'
function App() {
  return (
    <div>
    <HeaderContainer/>
    <Switch>
      <Route path="/post" exact component={AllPostsContainer}/>
      <Redirect to="/post"/>
    </Switch>
    </div>
    
  );
}

export default App;
