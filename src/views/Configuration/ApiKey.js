import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Row, Col } from 'react-flexbox-grid';

import { TextInput } from 'common/components/fields';
import { actions } from 'store';
import { isUrl, required } from 'common/utils/validations';
import styles from './ApiKey.module.scss';
import Button from "@material-ui/core/Button/Button";


const ApiKey = ({ resource, submitting, handleSubmit, onSubmit, onTest, successfully }) => (
    <form name='ApiKeyForm' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {!resource.url && <Row>
            <Col xs={12}>
                <TextInput
                    label={`Base URL`}
                    type="text"
                    name="url"
                    validate={[required, isUrl]}
                />
            </Col>
        </Row>}
        <Row>
            <Col xs={12}>
                <TextInput
                    label='API Key'
                    type='text'
                    name='apiKey'
                    validate={required}
                />
            </Col>
        </Row>
        <Row center='xs'>
            {resource.testURI && <Col xs={6}>
                <Button
                    type='button'
                    color='secondary'
                    disabled={submitting}
                    onClick={handleSubmit(onTest)}
                >
                    Test it!
                </Button>
            </Col>}
            <Col xs={6}>
                <Button
                    type='submit'
                    color='primary'
                    disabled={(successfully !== null && !successfully) || submitting}
                >
                    Save
                </Button>
            </Col>
        </Row>
    </form>
);

const getResourceData = () => {

};

const onSubmit = () => {

};

const onTest = (values, dispatch, props) => {
    console.log(props.resource, props.method);
    dispatch(
        actions.resource.testResource({
            ...props.resource,
            ...props.method.configuration(values.apiKey)
        })
    )
};

export default compose(
    reduxForm({
        form: 'Configuration',
        onSubmit,
        onTest
    }),
    connect(
        ({ resource }) => ({
            successfully: resource.testSuccessfully
        })
    )
)(ApiKey)