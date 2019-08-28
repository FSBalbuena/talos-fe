import React,{useEffect} from 'react'
import OnePost from '../components/OnePost'
import {fetchCurrentPost,clearCurrentPost} from '../redux/actions/currentPost-actions'
import {connect} from 'react-redux'
import PostNotFound from '../components/PostNotFound';


const CurrentPostContainer= (props)=>{
    const {id,
        post:{data,error,loading},
        fetchCurrentPost,
        clearCurrentPost}=props

    useEffect(
        ()=>{
            fetchCurrentPost(id)
            return ()=>{clearCurrentPost()}
        },[id])

        if(loading){
            return "Loading"
        }
        else if(error.message){
            return <PostNotFound/>
        }else{
            return (
                <OnePost post={data} image={`http://192.168.0.8:3000/${data.photoUrl}`}/>
            )
        }
}

const mapStateToProps=(state,ownProps)=>({
    post:state.currentPost,
    id:ownProps.match.params.id
})
const mapDispatchToProps=(dispatch)=>({
    fetchCurrentPost:(id)=>dispatch(fetchCurrentPost(id)),
    clearCurrentPost:()=>dispatch(clearCurrentPost())
})

export default connect(mapStateToProps,mapDispatchToProps)(CurrentPostContainer)