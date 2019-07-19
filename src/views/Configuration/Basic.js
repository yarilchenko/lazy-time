import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { TextInput } from 'common/components/fields';
import styles from './Basic.module.scss';
import { required, isUrl } from 'common/utils/validations';
import ConfigurationHOC from "./ConfigurationHOC";

const Basic = ({ resource, onSubmit, controls: Controls }) => (
    <form name='BasicAuthenticationForm' className={styles.form} onSubmit={onSubmit}>
        {!resource.url &&
        <Row>
            <Col xs={12}>
                <TextInput
                    label={`Base URL`}
                    type="text"
                    name="url"
                    validate={[required, isUrl]}
                />
            </Col>
        </Row>
        }
        <Row>
            <Col xs={12}>
                <TextInput
                    label="Login"
                    type="text"
                    name="login"
                    validate={required}
                />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <TextInput
                    label="Password"
                    type="password"
                    name="password"
                    validate={required}
                />
            </Col>
        </Row>
        <Row center='xs'>
            <Controls />
        </Row>
    </form>
);

export default ConfigurationHOC(Basic)