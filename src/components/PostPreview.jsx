import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
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

export default ({post:{photoUrl,title,description,id,tags}})=>{
  const classes = useStyles();
  return (
          <Grid item  xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={`http://192.168.0.8:3000/${photoUrl}`}
                title={title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {title[0].toUpperCase()+title.slice(1,30)}
                </Typography>
                <Typography>
                  {description.slice(0,100)}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid 
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  container>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {tags.join(",")}
                    </Typography>
                    <Link to={`posts/${id}`} className={classes.link}>
                      <Button variant="contained" color="primary" size="small">VIEW</Button>
                    </Link>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        );
}