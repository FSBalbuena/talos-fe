import React, {useState,useEffect} from 'react'
import axios from 'axios';
import PostGridComponent from '../components/PostGridComponent';

export default (props)=>{
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

    return <PostGridComponent posts={posts}/>


}
