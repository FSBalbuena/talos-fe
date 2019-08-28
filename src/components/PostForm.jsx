import React from 'react'
import Grid from '@material-ui/core/Grid';
import FormBody from './FormBody'
import FormTags from './FormTags'
import FormImage from './FormImage'
import FormSubmit from './FormSubmit';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles(theme => ({
    container:{
        width:"80vw",
      padding:"5vw",
      margin:"0 auto"
    },
    loader:{
        backgroundColor:"#8fb3f1"
    }

}));
export default ({error,loading,
                generalError,
                title,description,
                handleChangeTitle,handleChangeDescription,
                handleSelectImage,file,
                tag,tags,handleChangeTag,
                handleTagSubmit,handleDeleteTag,
                handleSubmitForm})=>{

    const classes=useStyles()
    return (
        <>
        {loading?<LinearProgress className={classes.loader}/>:null}
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
                    titleValue={title}
                    descriptionValue={description}
                    handleChangeTitle={handleChangeTitle}
                    handleChangeDescription={handleChangeDescription}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                <FormImage 
                    error={error}
                    handleSelectImage={handleSelectImage}
                    file={file}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormTags 
                    error={error}
                    tagValue={tag}
                    tags={tags}
                    handleChangeTag={handleChangeTag}
                    handleTagSubmit={handleTagSubmit}
                    handleDeleteTag={handleDeleteTag}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormSubmit error={error} handleSubmitForm={handleSubmitForm}/>
                </Grid>
            </Grid>
        </>
    )
}
