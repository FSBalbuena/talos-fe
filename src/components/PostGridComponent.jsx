import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GridPost from './GridPost';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      }
  }));

export default ({posts})=>{
    const classes=useStyles()

return (
    <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {posts.map(post => (
                <GridPost key={post.id} post={post}/>
            ))}
        </Grid>
  </Container>
)
}