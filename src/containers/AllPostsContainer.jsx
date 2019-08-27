import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default ()=>{
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
    return (
        <div>
            {posts.length?
            posts.map(post=><h1>{post.title}</h1>)
            :"loding..."}
        </div>
    )


}
