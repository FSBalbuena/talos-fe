import React from 'react';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
error:{
    color:"red"
}
}));

export default ({titleValue,error,handleChangeTitle,HandleChangeDescription,descriptionValue})=>{
    const classes=useStyles()

    return (
        <>
        <TextField
        label="Title"
        className={classes.title}
        placeholder="Post Title ..."
        helperText={<small className={classes.error}>{error.title}</small>}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
        shrink: true,
        }}
        onChange={handleChangeTitle}
        value={titleValue}
         />
        <TextField
        label="Description"
        rows={3}
        className={classes.description}
        placeholder="Post description ..."
        helperText={<small className={classes.error}>{error.description}</small>}
        fullWidth
        multiline
        margin="normal"
        variant="outlined"
        InputLabelProps={{
        shrink: true,
        }}
        value={descriptionValue}
        onChange={HandleChangeDescription}
         />
         </>
    )
}


