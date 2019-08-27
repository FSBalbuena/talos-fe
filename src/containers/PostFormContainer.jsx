import React from 'react'
import Grid from '@material-ui/core/Grid';
import FormBody from '../components/FormBody'
import FormTags from '../components/FormTags'
import FormImage from '../components/FormImage'
import { withStyles } from '@material-ui/core/styles';
import axios from "axios"
import FormSubmit from '../components/FormSubmit';

const useStyles = theme => ({
  container:{
      width:"80vw",
    padding:"5vw",
    margin:"0 auto"
  }
});


class PostFormContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tags:[],
            tagValue:"",
            titleValue:"",
            descriptionValue:"",
            file:{},
            error:{}
        }
        this.handleTitleValue=this.handleTitleValue.bind(this)
        this.handleDescriptionValue=this.handleDescriptionValue.bind(this)
        this.handleTagValue=this.handleTagValue.bind(this)
        this.handleTagSubmit=this.handleTagSubmit.bind(this)
        this.handleDeleteTag=this.handleDeleteTag.bind(this)
        this.handleSelectImage=this.handleSelectImage.bind(this)
        this.handleSubmitForm=this.handleSubmitForm.bind(this)
    }

    handleTitleValue(e){
        let titleValue=e.target.value
        let error=titleValue.trim()==""?"Title must have a word":""
        this.setState(state=>({titleValue,error:{...state.error,title:error,submit:""}}))
    }
    handleDescriptionValue(e){
        let descriptionValue=e.target.value
        let error=descriptionValue.trim()==""?"Description must have at least a word":""
        this.setState(state=>({descriptionValue,error:{...state.error,description:error,submit:""}}))
    }
    handleTagValue(e){
        let value=e.target.value
        this.setState({tagValue:value})
    }
    handleTagSubmit(){
        const {tagValue,tags}=this.state
        let error=""
        if(tagValue.trim()==""){
            error="Tag must have at least a word"
        }else if(tags.indexOf(tagValue.toLowerCase())>=0){
            error="Tag it`s already added"
        }
        error?
            this.setState(state=>({error:{...state.error,tag:error,submit:""}}))
        :
            this.setState(state=>({tagValue:"",tags:[...state.tags,tagValue.toLowerCase()],error:{...state.error,tag:error,submit:""}}))              
    }
    handleDeleteTag(deletedTag){
        this.setState(state=>({tags:state.tags.filter(tag=>tag!=deletedTag)}))
    }
    handleSelectImage=(e)=>{
        let file= e.target.files[0]
        let error=!file?"Image is missing":""
        this.setState(state=>({file,error:{...state.error,file:error,submit:""}}))
    }
    handleSubmitForm(){
        const {titleValue,descriptionValue,tags,file,error}=this.state
        if(Object.values(error).filter(e=>e!="").length==0 && titleValue && descriptionValue && file.name){
            let image= new FormData()
        image.append("image",file,file.name)
        axios.post("http://192.168.0.8:3000/posts",{title:titleValue,description:descriptionValue,tags})
        .then(res=>res.data)
        .then(res=>axios.put(`http://192.168.0.8:3000/posts/${res.id}/picture`,image))
        .then(res=>this.props.history.push("/posts"))
        .catch(err=>console.log("Algo Salio Mal"))
        }else{
            this.setState(state=>({error:{...state.error,submit:"You Can`t Submit, form is incomplete"}}))
        }
        
    }
    render(){
        const {classes}=this.props
        const {titleValue,descriptionValue,tags,tagValue,file,error}=this.state
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.container}
                spacing={2}>
                <Grid item xs={12} sm={8}>
                <FormBody 
                    error={error}
                    titleValue={titleValue}
                    descriptionValue={descriptionValue}
                    handleChangeTitle={this.handleTitleValue}
                    HandleChangeDescription={this.handleDescriptionValue}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                <FormImage 
                    error={error}
                    handleSelectImage={this.handleSelectImage}
                    file={file}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormTags 
                    error={error}
                    tagValue={tagValue}
                    tags={tags}
                    handleChangeTag={this.handleTagValue}
                    handleTagSubmit={this.handleTagSubmit}
                    handleDeleteTag={this.handleDeleteTag}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormSubmit error={error} handleSubmitForm={this.handleSubmitForm}/>
                </Grid>
    
            </Grid>
        )
    }   
}


export default  withStyles(useStyles())(PostFormContainer)