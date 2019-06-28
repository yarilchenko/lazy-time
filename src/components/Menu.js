import React from 'react';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import IconBuild from '@material-ui/icons/Build';
import { routes as r } from 'routes';

export default () => (
    <AppBar color='primary' position='relative'>
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                Time tracker
            </Typography>
            <Link to={r.integration.list}>
                <IconButton>
                    <IconBuild
                        color='inherit'
                    />
                </IconButton>
            </Link>
        </Toolbar>
    </AppBar>
);