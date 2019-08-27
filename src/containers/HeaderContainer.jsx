import React, { useEffect,useState } from 'react';
import {withRouter,Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeaderPostButton from '../components/headerPostButton'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  avatar:{
      margin:"5px",
      width:"50px"
  },
  link:{
    textDecoration:"none",
    color:"#f9f9f9"
  }
}));

const HeaderContainer=(props)=> {
  const classes = useStyles();
  const {location}=props
  const [showIcon,setShowIcon]=useState(true)
  const [showButton,setShowButton]=useState(true)

  useEffect(
    ()=>{
      let page=location.pathname.split("/").slice(-1)[0]
     page=="new"?setShowIcon(false):setShowIcon(true);
     page=="posts"?setShowButton(false):setShowButton(true);
    
    },[location]
  )
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Challenge
          </Typography>
          <HeaderPostButton showIcon={showIcon}/>
          {showButton?
          <Button color="inherit">
          <Link className={classes.link} to="/posts">Posts</Link>
          </Button>
          :null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(HeaderContainer) 