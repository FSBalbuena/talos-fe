import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import AllPostsContainer from './containers/AllPostsContainer'
import PostFormContainer from './containers/PostFormContainer'
import HeaderContainer from './containers/HeaderContainer'
function App() {
  return (
    <div>
    <HeaderContainer/>
    <Switch>
      <Route path="/posts" exact component={AllPostsContainer}/>
      <Route path="/posts/new" exact component={PostFormContainer}/>
      <Redirect to="/posts"/>
    </Switch>
    </div>
    
  );
}

export default App;
