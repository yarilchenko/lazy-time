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
                <Col xs={12} sm={8} md={6}>
                    <Row center='xs'>
                        <Col xs={6} sm={5} md={5} lg={4}>
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