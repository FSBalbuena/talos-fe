import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import AllPostsContainer from './containers/AllPostsContainer'
import PostFormContainer from './containers/PostFormContainer'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'
import CurrentPostContainer from './containers/CurrentPostContainer'
function App() {
  return (
    <>
    <div style={{minHeight:"91vh"}}>
    <HeaderContainer/>
    <Switch>
      <Route path="/posts" exact component={AllPostsContainer}/>
      <Route path="/posts/new" exact component={PostFormContainer}/>
      <Route path="/posts/:id" exact component={CurrentPostContainer}/>
      <Redirect to="/posts"/>
    </Switch>
    </div>
    <FooterContainer/>
    
    </>
    
  );
}

export default App;
