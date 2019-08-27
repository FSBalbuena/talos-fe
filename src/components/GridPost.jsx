import React,{useState} from 'react';
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
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mediaHover: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    transform: "scale(1.1)"
  }
}));

export default ({post:{photoUrl,title,description,id,tags}})=>{
  const classes = useStyles();
  const [hover,setHover]=useState(false)
  return (
    <Card className={classes.card}>
      <CardMedia
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        className={hover?classes.mediaHover:classes.media}
        image={`http://192.168.0.8:3000/${photoUrl}`}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions >
          <Grid 
            direction="row"
            justify="space-between"
            alignItems="center"
            container>
            <Typography variant="p" color="textSecondary" component="p">
            {tags.join(",")}
            </Typography>
            <Button variant="contained" color="primary" size="small">VIEW</Button>
          </Grid>
      </CardActions>
    </Card>
  );
}