import React, { Fragment } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Jira from './Jira/Item';
import Redmine from './Redmine/Item';
import styles from './List.module.scss';

const integrations = [
    Jira,
    Redmine
];


export default () => (
    <Fragment>
        {/*<Snackbar*/}
            {/*open={true}*/}
            {/*anchorOrigin={{horizontal: 'center', vertical: 'top'}}*/}
        {/*>*/}
            {/*<SnackbarContent*/}
                {/*message='This program works better with Premium Rescuetime subscribe'*/}
            {/*/>*/}
        {/*</Snackbar>*/}
        <Row xs={12} md={10} xl={8} around='xs' className={styles.root}>
            {integrations.map((Integration, key) => (
                <Col xs={6} sm={3} key={key}>
                    <Paper>
                        <Integration />
                    </Paper>
                </Col>
            ))}
        </Row>
    </Fragment>
);