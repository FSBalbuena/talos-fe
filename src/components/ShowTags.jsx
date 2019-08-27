import React from 'react'
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(1),
      }
}));
export default ({tags,handleDeleteTag, edit})=>{
    const classes=useStyles()

    return(
        <Grid container justify="flex-start" alignItems="center">
            {tags && tags.length?
                 tags.map(tag=><Chip
                     label={tag}
                     key={tag}
                     onDelete={edit?()=>handleDeleteTag(tag):null}
                     className={classes.chip}
                   />)
            :null}
        </Grid>
    )
}