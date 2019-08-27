import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  avatar:{
      margin:"5px",
      width:"50px"
  }
}));

export default ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <img alt="Logo Talos" src="https://media.licdn.com/dms/image/C4E0BAQFsJ1SQcdEq6w/company-logo_200_200/0?e=2159024400&v=beta&t=iUqknzOj_AxHfceFglHWiRlIddI7Tjvl_jN0qnq-S4k" className={classes.avatar} />
          <Typography variant="h6" className={classes.title}>
            Challenge
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
          <Add />
          </IconButton>
          {/*<Button color="inherit">Posts</Button>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}