import React, { Fragment } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Typography from '@material-ui/core/Typography';
import {
    tracker as trackers,
    source as sources
} from 'common/core';
import Item from './Item';
import styles from './List.module.scss';

export default (props) => {

    return (
        <Fragment>
            <Row xs={12} md={10} xl={8} around='xs' className={styles.root}>
                <Col xs={12}>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={12}>
                                    <Typography variant='h4' align='center'>Trackers</Typography>
                                </Col>
                            </Row>
                            <Row around='xs'>
                                {trackers.map((tracker) => (
                                    <Item
                                        key={tracker.title}
                                        resource={tracker}
                                        type='tracker'
                                    />
                                ))}
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Row center='xs'>
                                <Col xs={12}>
                                    <Typography variant='h4' align='center'>Sources</Typography>
                                </Col>
                            </Row>
                            <Row around='xs'>
                                {sources.map((source) => (
                                    <Item
                                        key={source.title}
                                        resource={source}
                                        type='source'
                                    />
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
};