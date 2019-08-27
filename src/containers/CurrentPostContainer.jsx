import React,{useState,useEffect} from 'react'
import OnePost from '../components/OnePost'
import axios from 'axios'
import Error from '../components/Error'
export default (props)=>{
    const id=props.match.params.id;
    const [post,setPost]=useState({})
    const [error,setError]=useState(null)
    useEffect(
        ()=>{
            axios.get(`http://192.168.0.8:3000/posts/${id}`)
            .then(res=>res.data)
            .then(post=>setPost(post))
            .catch(err=>setError("Something its wrong with the id"))
        },[id])
        
        if(error){
            return <Error text={error}/>
        }else{
            return (
                <OnePost post={post}/>
            )
        }
        


}