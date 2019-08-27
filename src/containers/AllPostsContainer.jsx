import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import GridPost from '../components/GridPost';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container:{
      width:"80vw",
    padding:"5vw",
    margin:"0 auto"
  }
}));
export default (props)=>{
    const classes=useStyles()
    const [posts,setPosts]=useState([])

    useEffect(
        ()=>{
            axios.get("http://192.168.0.8:3000/posts")
            .then(res=>res.data)
            .then(posts=>setPosts(posts))
            .catch(err=>console.log(err))
        },
        null
    )
    const handleViewClick=function(id){
        props.history.push(`/posts/${id}`)
    }
    return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.container}
                spacing={2}
                >
                {posts.length?posts.map(post=>(
                    <Grid key={post.id} item sm={4} xs={12}>
                    <GridPost post={post}
                    handleViewClick={()=>handleViewClick(post.id)}/>
                    </Grid>
                )):null}
                
            </Grid>
    )


}
