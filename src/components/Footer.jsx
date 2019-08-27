import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    appBar: {
        position:"sticky",
        top:0
      },
      container:{
          width:"80vw",
          margin:"0 auto"
      }
}));


export default ()=>{
    const classes=useStyles()

    return(
    <AppBar color="primary" className={classes.appBar}>
        <Grid container 
            direction="row"
            justify="center"
            alignItems="center" 
            spacing={4}
            className={classes.container}>
            <Grid item xs={12} sm={6} md={3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed possimus doloremque amet quos, est nesciunt...
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed possimus doloremque amet quos, est nesciunt...
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed possimus doloremque amet quos, est nesciunt...
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed possimus doloremque amet quos, est nesciunt...
            </Grid>
        </Grid>
      </AppBar>
    )}