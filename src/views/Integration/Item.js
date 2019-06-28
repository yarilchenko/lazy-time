import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper/Paper';
import styles from './Item.module.scss';
import * as actions from 'store/common/actions';

const IntegrationItem = ({ type, resource, redirect }) => {
    const handleOnClick = () => {
        redirect({
            ...resource,
            type
        });
    };

    return (
        <Col xs={6} sm={3} key={resource.title}>
            <Paper onClick={handleOnClick}>
                <Row xs={12} className={styles.root}>
                    <Col xs={12} className={styles.logo}>
                        <img src={resource.logo} alt={resource.description} className={styles.logoImage}/>
                    </Col>
                </Row>
            </Paper>
        </Col>
    )
};

const mapDispatchToProps = ({
    redirect: actions.selectIntegrationResource
});

export default connect(null, mapDispatchToProps)(IntegrationItem)