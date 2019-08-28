import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeaderPostButton from './HeaderPostButton'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  link:{
    textDecoration:"none",
    color:"#f9f9f9"
  },
  title:{
      textDecoration:"none",
        color:"#f9f9f9",
        flexGrow:1
  }
}));
export default ({showButton,showIcon})=>{
    const classes=useStyles()
    return(
         <div className={classes.root}>
           <AppBar position="static">
             <Toolbar>
               <Typography variant="h6" component={Link} to="/posts" className={classes.title}>
                 Challenge
               </Typography>
               {showButton?
               <Link className={classes.link} to="/posts">
                  <Button color="inherit">Posts </Button>
                </Link>
               :null}
               <HeaderPostButton showIcon={showIcon}/>
             </Toolbar>
           </AppBar>
         </div>
    )
}