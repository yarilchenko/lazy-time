import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import logo from 'assets/images/jira-logo.png';
import styles from '../Item.module.scss';
import { routes as r } from 'routes';

export default () => (
    <Link to={r.integration.jira.path}>
        <Row xs={12} className={styles.root}>
            <Col xs={12} className={styles.logo}>
                <img src={logo} alt="JIRA integration" className={styles.logoImage}/>
            </Col>
        </Row>
    </Link>
)