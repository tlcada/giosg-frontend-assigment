import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import Gesture from '@material-ui/icons/Gesture';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


const HeaderContent = (props) => {
    const { classes } = props;

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Gesture />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.grow}>
                        Giosg - Frontend Assignment
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default withStyles(styles)(HeaderContent);
