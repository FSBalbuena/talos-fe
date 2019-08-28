import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        wordBreak:"break-word"
      },
      cardMedia: {
        paddingTop: '56.25%',
        '&:hover': {
          transform: "scale(1.1)",
        }
      },
      cardContent: {
        flexGrow: 1,
      },
      link:{
        textDecoration:"none"
      }
  }));

export default ()=>{
    const classes=useStyles()

return (
    <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {[1,2,3,4,5,6].map(index => (
                <Grid key={index} item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <Skeleton variant="rect" width="100%" height={50} 
                className={classes.cardMedia}/>
                  <CardContent className={classes.cardContent}>
                  <Skeleton height={10} width="60%" />
                  <Skeleton height={6} width="80%" />
                  <Skeleton height={6} width="70%" />
                  <Skeleton height={6} width="90%" />
                  </CardContent>
                  <CardActions>
                    <Grid 
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                      container>
                        <Skeleton height={6} width="40%" />
                        <Skeleton variant="rect"  height={30} width={80} />
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
  </Container>
)
}