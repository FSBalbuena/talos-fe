import React from 'react';
import TextField from '@material-ui/core/TextField';
import Error from './Error'


export default ({titleValue,
                error,handleChangeTitle,
                HandleChangeDescription,
                descriptionValue})=>{

    return (
        <>
        <TextField
        label="Title"
        placeholder="Post Title ..."
        helperText={<Error text={error.title} />}
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
        placeholder="Post description ..."
        helperText={<Error text={error.description} />}
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


