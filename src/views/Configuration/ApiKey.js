import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { TextInput } from 'common/components/fields';
import { isUrl, required } from 'common/utils/validations';
import styles from './ApiKey.module.scss';
import ConfigurationHOC from './ConfigurationHOC';

const ApiKey = ({ resource, onSubmit, controls: Controls }) => (
        <form name='ApiKeyForm' className={styles.form} onSubmit={onSubmit}>
            {!resource.url &&
            <Row>
                <Col xs={12}>
                    <TextInput
                        label={`Base URL`}
                        type='text'
                        name='url'
                        validate={[required, isUrl]}
                    />
                </Col>
            </Row>
            }
            <Row>
                <Col xs={12}>
                    <TextInput
                        label='API Key'
                        type='text'
                        name='key'
                        validate={required}
                    />
                </Col>
            </Row>
            <Row center='xs'>
                <Controls />
            </Row>
        </form>
);

export default ConfigurationHOC(ApiKey);