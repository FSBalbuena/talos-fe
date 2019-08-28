import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ShowTags from './ShowTags'
import { makeStyles } from '@material-ui/core/styles';
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
description:{
    marginTop:"2vh",
    textAlign:"left",
    whiteSpace: "pre-line"
},

}));

export default ({post:{title,description,tags},image})=> {

  const classes = useStyles();
  return (

    <>
        <Grid container justify="center" alignItems="center" className={classes.container} >
            <img src={image} alt={title} className={classes.media} />
        </Grid>
        <Grid container direction="column" className={classes.card} justify="space-between">
            <Grid container direction="column">
                <Typography variant="h3" color="textSecondary" className={classes.title} component="h1">
                  {title?title[0].toUpperCase()+title.slice(1):null}
                </Typography>
                <Typography variant="h5" color="textSecondary" className={classes.description} component="p">
                    {description}
                </Typography>
            </Grid>
            <Grid container direction="column" className={classes.postBody}>
                <Typography variant="h6" color="textSecondary" component="p">
                    Tags
                </Typography>
                <ShowTags tags={tags} edit={false}/>
            </Grid>
        </Grid>   
    </>
  );
}