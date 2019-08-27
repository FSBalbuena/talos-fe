import React from 'react'
import Grid from '@material-ui/core/Grid';
import FormBody from '../components/FormBody'
import FormTags from '../components/FormTags'
import FormImage from '../components/FormImage'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from "axios"

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
            file:{}
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
        let value=e.target.value
        this.setState({titleValue:value})
    }
    handleDescriptionValue(e){
        let value=e.target.value
        this.setState({descriptionValue:value})
    }
    handleTagValue(e){
        let value=e.target.value
        this.setState({tagValue:value})
    }
    handleTagSubmit(){
        const {tagValue,tags}=this.state
        if(tagValue && tags.indexOf(tagValue)==-1 ){
            this.setState({tags:[...tags,tagValue],tagValue:""})
        }else{
            //put an error
        }
    }
    handleDeleteTag(deletedTag){
        this.setState(state=>({tags:state.tags.filter(tag=>tag!=deletedTag)}))
    }
    handleSelectImage=(e)=>{
        let file= e.target.files[0]
        this.setState({file})
    }
    handleSubmitForm(){
        const {titleValue,descriptionValue,tags,file}=this.state
        let image= new FormData()
        image.append("image",file,file.name)
        axios.post("http://192.168.0.8:3000/posts",{title:titleValue,description:descriptionValue,tags})
        .then(res=>res.data)
        .then(res=>axios.put(`http://192.168.0.8:3000/posts/${res.id}/picture`,image))
        .then(res=>this.props.history.push("/posts"))
        .catch(err=>console.log("Algo Salio Mal"))
    }
    render(){
        const {classes}=this.props
        const {titleValue,descriptionValue,tags,tagValue,file}=this.state
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
                    titleValue={titleValue}
                    descriptionValue={descriptionValue}
                    handleChangeTitle={this.handleTitleValue}
                    HandleChangeDescription={this.handleDescriptionValue}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                <FormImage 
                    handleSelectImage={this.handleSelectImage}
                    file={file}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormTags 
                    tagValue={tagValue}
                    tags={tags}
                    handleChangeTag={this.handleTagValue}
                    handleTagSubmit={this.handleTagSubmit}
                    handleDeleteTag={this.handleDeleteTag}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={this.handleSubmitForm}>Enviar</Button>
                </Grid>
    
            </Grid>
        )
    }   
}


export default  withStyles(useStyles())(PostFormContainer)