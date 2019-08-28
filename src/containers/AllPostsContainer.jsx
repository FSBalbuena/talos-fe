import React, {useEffect} from 'react'
import PostGridComponent from '../components/PostGridComponent';
import {fetchAllPosts} from '../redux/actions/allPosts-actions'
import {connect} from 'react-redux'

const AllPostContainer=(props)=>{
    const {posts:{loading,data,error},fetchAllPosts} =props
    useEffect(()=>{fetchAllPosts()},[])

    if(loading){
            return "This goes an Skeleton"
    }else if(Object.keys(error).length){
        return "Something bad happend"
    }else{
        return <PostGridComponent posts={data}/>
    }
}
const mapStateToProps=(state,ownProps)=>({
posts:state.allPosts
})
const mapDispatchToProps=(dispatch,ownProps)=>({
    fetchAllPosts:()=>dispatch(fetchAllPosts())
})

export default connect(mapStateToProps,mapDispatchToProps)(AllPostContainer)