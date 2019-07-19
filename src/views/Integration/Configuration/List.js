import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'react-flexbox-grid';
import trackers from 'common/core/trackers';
import styles from 'views/Configuration/Basic.module.scss';
import pathToRegexp from 'path-to-regexp';
import { routes } from 'routes';

const MethodsList = ({ methods, onClick }) => {
    return (
        methods.map(({ icon: Icon, title, code }) => (
            <Row key={code} center='xs'>
                <Col xs={12} sm={6}>
                    <Button
                        color='primary'
                        fullWidth={true}
                        onClick={() => onClick(code)}
                    >
                        <Icon/>
                        {title}
                    </Button>
                </Col>
            </Row>
        ))
    )
};

export default ({ history, match: { params } }) => {
    const resource = trackers.find((tracker) => tracker.code === params.code),
        { methods } = resource;

    const handleOnClick = (method) => {
        history.push(
            pathToRegexp
                .compile(routes.configuration.method)({
                    type: params.type,
                    code: resource.code,
                    method
                })
        )
    };

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
                    {methods.length &&
                    <MethodsList
                        methods={methods}
                        onClick={handleOnClick}
                    />
                    }
                </Col>
            </Row>
        </Fragment>
    );
}