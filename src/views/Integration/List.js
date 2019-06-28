import React, { Fragment } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Typography from '@material-ui/core/Typography';
/**
 * GET Object tracker & sources
 */
import trackers from 'config/trackers';
import Item from './Item';
import styles from './List.module.scss';

export default (props) => {

    return (
        <Fragment>
            <Row xs={12} md={10} xl={8} around='xs' className={styles.root}>
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <Typography variant='h4' align='center'>Trackers</Typography>
                        </Col>
                    </Row>
                    <Row around='xs'>
                        {trackers.map((tracker) => (
                            <Item key={tracker.title} resource={tracker} type='tracker' />
                        ))}
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
};