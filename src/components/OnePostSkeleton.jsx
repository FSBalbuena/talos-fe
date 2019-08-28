import React from 'react';
import Grid from '@material-ui/core/Grid';
import ShowTags from './ShowTags'
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  card: {
    width:"80vw",
    padding:"2vw",
    margin:"0 auto",
    minHeight:"65vh",
    border:"none",
    wordBreak:"break-word"
  },
  media: {
    height: "30vh",
    width: "100%",
    objectFit: "cover"
  },
postBody:{
    width:"60vw",
  padding:"2vw"
},
title:{
    textAlign:"center",
},

}));

export default ()=> {

  const classes = useStyles();
  return (

    <>
        <Grid container justify="center" alignItems="center" className={classes.container} >
        <Skeleton variant="rect" className={classes.media} />
        </Grid>
        <Grid container direction="column" className={classes.card} justify="space-between">
            <Grid container direction="column">
                <Skeleton height={20} width="60%" className={classes.title} />
                  <Skeleton height={12} width="80%" />
                  <Skeleton height={12} width="70%" />
                  <Skeleton height={12} width="70%" />
                  <Skeleton height={12} width="90%" />
            </Grid>
            <Grid container direction="column" className={classes.postBody}>
            <Skeleton height={12} width="20%" />
                <ShowTags tags={["####","#####"]} edit={false}/>
            </Grid>
        </Grid>   
    </>
  );
}