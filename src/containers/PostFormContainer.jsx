import React from 'react'
import PostForm from '../components/PostForm'
import {createNewPost} from '../redux/actions/allPosts-actions'
import {connect} from 'react-redux'

class PostFormContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tags:[],
            tag:"",
            title:"",
            description:"",
            file:{},
            error:{}
        }
    }
    handleChange=(property,e)=>{
        let value=e.target.value
        let error=property==="tag"?
                "":value.trim()===""?
                    `${property} must have at least a word`:
                    ""

        this.setState(state=>({[property]:value,error:{...state.error,[property]:error,submit:""}}))
    }

    handleDeleteTag=(deletedTag)=>{
        this.setState(state=>({tag:"",tags:state.tags.filter(tag=>tag!==deletedTag)}))
    }

    handleSelectImage=(e)=>{
        let file= e.target.files[0]
        let error=!file?"Image is missing":""
        this.setState(state=>({file,error:{...state.error,file:error,submit:""}}))
    }

    handleTagSubmit=()=>{
        const {tag,tags}=this.state
        //1 - check if the new tag it`s not empty
        //2 - check if already exists 
        let error=tag.trim()===""?
                     "Tag must have at least a word":
                     tags.indexOf(tag.toLowerCase())>=0?
                     "Tag it`s already added":
                     "";
        //update the state if it is correct
       this.setState(state=>(Object.assign({},
                                state,
                                {error:{...state.error,tag:error,submit:""}},
                                (error?{}:{tag:"",tags:[...tags,tag]}))))    
    }
    
    handleSubmitForm=()=>{
        const {title,description,tags,file,error}=this.state
        const {createNewPost,history}=this.props
        //if aren`t errors and fields are filled continue
        if(Object.values(error).filter(e=>e!=="").length===0 && title && description && file.name){
            let image= new FormData()
            image.append("image",file,file.name)
            //create new post
            createNewPost({body:{title,description,tags},image})
            .then(status=>history.push(status.id?`/posts/${status.id}`:`/posts`))
        }else{
            this.setState(state=>({error:{...state.error,submit:"You Can`t Submit, form is incomplete"}}))
        }
    }


    render(){
        const {ui}=this.props
        const {title,description,tags,tag,file,error}=this.state
        return <PostForm error={error}
                        loading={ui.loading}
                        generalError={ui.error} 
                        title={title} 
                        description={description} 
                        file={file} 
                        tag={tag} 
                        tags={tags} 
                        handleChangeTitle={this.handleChange.bind(this,"title")}
                        handleChangeDescription={this.handleChange.bind(this,"description")} 
                        handleSelectImage={this.handleSelectImage}
                        handleChangeTag={this.handleChange.bind(this,"tag")}
                        handleTagSubmit={this.handleTagSubmit}
                        handleDeleteTag={this.handleDeleteTag}
                        handleSubmitForm={this.handleSubmitForm} 
                        />
    }   
}

const mapStateToProps=(state,ownProps)=>({
    ui:state.ui
})

const mapDispatchToProps=(dispatch)=>({
    createNewPost:(body)=>dispatch(createNewPost(body))
})

export default connect(mapStateToProps,mapDispatchToProps)(PostFormContainer)