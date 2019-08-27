import React, { useEffect,useState } from 'react';
import {withRouter,Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';

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
  const [hover,setHover]=useState(false)
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
        <img alt="Logo Talos" src="https://media.licdn.com/dms/image/C4E0BAQFsJ1SQcdEq6w/company-logo_200_200/0?e=2159024400&v=beta&t=iUqknzOj_AxHfceFglHWiRlIddI7Tjvl_jN0qnq-S4k" className={classes.avatar} />
          <Typography variant="h6" className={classes.title}>
            Challenge
          </Typography>
          {showIcon?
          <span onMouseEnter={()=>setHover(true)} 
          onMouseLeave={()=>setHover(false)}
          onClick={()=>props.history.push("/posts/new")}>
          <Fade in={hover} timeout={1500}>
            <Button color="inherit">Add New post</Button>
          </Fade>
          <Fade in={!hover} timeout={{enter:3000}}>
           <IconButton className={classes.menuButton} 
            color="inherit" aria-label="menu" 
            ><Add /></IconButton>
          </Fade>
          </span>
          :null}
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