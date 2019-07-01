import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import * as resources from 'common/core';
import styles from './Configuration.module.scss';

const ResourceConfiguration = ({ match }) => {
    const
        {
            params: {
                type,
                code,
                method: methodCode
            }
        } = match,
        resource = resources[type].find((r) => r.code === code),
        method = resource.methods.find((m) => m.code === methodCode),
        { component: MethodForm } = method;

    return (
        <Grid fluid={true}>
            <Row middle={'xs'} center={'xs'}>
                <Col xs={4}>
                    <Row center='xs'>
                        <Col xs={8}>
                            <img
                                src={resource.logo}
                                className={styles.logo}
                                alt={resource.description}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <MethodForm
                            resource={{
                                ...resource,
                                type
                            }}
                            method={method}
                        />
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
};

export default ResourceConfiguration;