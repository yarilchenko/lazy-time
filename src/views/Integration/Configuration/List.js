import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'react-flexbox-grid';
import trackers from 'common/core/trackers';
import styles from 'views/Configuration/Basic.module.scss';

const MethodsList = ({ methods }) => (
    methods.map(({ icon: Icon, ...method }) => (
        <Row key={method.code} center='xs'>
            <Col xs={12} sm={6}>
                <Button color='primary' fullWidth={true}>
                    <Icon />
                    {method.title}
                </Button>
            </Col>
        </Row>
    ))
);

export default ({ match: { params } }) => {
    const resource = trackers.find((tracker) => tracker.code === params.code),
        { methods } = resource;

    return (
        <Fragment>
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
                <Col xs={12}>
                    {methods.length && <MethodsList methods={methods} />}
                </Col>
            </Row>
        </Fragment>
    );
}