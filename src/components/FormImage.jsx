import React, {useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Error from './Error'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
image:{
    maxWidth:"100%",
    margin:"0 auto",
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(2),
    maxHeight:"30vh"
},
inputFile:{
    visibility:"hidden",
    position:"absolute"
}
}));

export default ({file,handleSelectImage,error})=>{
    const classes=useStyles()
    const [image,setImage]=useState("https://www.nationalgeographic.com.es/medio/2018/02/27/tortuga__1280x720.jpg")
    useEffect(
        ()=>{
            if(file && file.name){
                let reader = new FileReader();
            reader.onload = function (e) {
                setImage(e.target.result)
            };
            reader.readAsDataURL(file)
            }
        },[file]
    )

    const handleUploadImage=()=>{
        document.getElementById("inputFile").click()
    }
    return (
        <>
        <input type="file" 
                max="1" 
                className={classes.inputFile} 
                id="inputFile" 
                onChange={handleSelectImage}/>
        <Grid container direction="row"
            justify="space-between"
            alignItems="flex-start">
            <Typography variant="body2" color="textSecondary" component="p">
                {`image: ${file?file.name:""}`}
            </Typography>
            <Button variant="contained" 
                color="primary" 
                className={classes.button}
                onClick={handleUploadImage}>
                 UPLOAD
            </Button>
        </Grid>
        <img src={image} 
            id="fileImg" 
            className={classes.image} 
            alt={file?file.name:"Tortules in the sea"}/><br/>
            <Error text={error.file}/>
         </>
    )
}


