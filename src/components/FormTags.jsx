import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Error from './Error'

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(1),
      },
      button: {
        margin: theme.spacing(1),
      }
}));
export default ({tags,tagValue,
                handleChangeTag,
                handleTagSubmit,
                error,
                handleDeleteTag})=>{
    const classes=useStyles()

    return(
        <>
        <Grid container justify="space-between" alignItems="center">
            <Grid item xs={12} sm={8}>
                <TextField
                label="Tag"
                placeholder="Enter a new tag"
                helperText={<Error text={error.tag} />}
                margin="normal"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                shrink: true,
                }}
                onChange={handleChangeTag}
                value={tagValue}
                />
            </Grid>
            <Grid item xs={6} sm={4}>
            <Button 
                variant="contained" 
                color="primary" 
                className={classes.button}
                onClick={handleTagSubmit}>
                    Add Tag
                </Button>
            </Grid>
        </Grid>
        <Grid container justify="flex-start" alignItems="center">
            {tags.length?
                 tags.map(tag=><Chip
                     label={tag}
                     key={tag}
                     onDelete={()=>handleDeleteTag(tag)}
                     className={classes.chip}
                   />)
            :null}
        </Grid>
        
        
        </>
    )
}