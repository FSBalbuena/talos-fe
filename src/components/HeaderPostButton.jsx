import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textDecoration:"none",
    color:"#f9f9f9"
  },
  icon:{
    position:"absolute"
  }
}));

export default ({showIcon})=>{
  const classes=useStyles()
  //This flag allow ud to do the transition
  const [hover,setHover]=useState(false)

  return showIcon?(
            <Link onMouseEnter={()=>setHover(true)} 
            onMouseLeave={()=>setHover(false)}
            to="/posts/new" className={classes.link}>
              <Fade in={hover} timeout={{enter:2000,exit:1500}} >
                <Button color="inherit" >Add New Post</Button>
              </Fade>
              <Fade className={classes.icon} timeout={{enter:1000,exit:500}} in={!hover} >
                <Add />
              </Fade>
            </Link>
    ):null
}