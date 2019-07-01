import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import { reduxForm } from 'redux-form';
import normalizeURL from 'common/utils/normalizer/url';
import { TextInput } from 'common/components/fields';
import styles from './Basic.module.scss';
import { actions } from 'store';
import { required, isUrl } from 'common/utils/validations';

const Basic = ({ resource, submitting, handleSubmit, onSubmit, onTest, successfully }) => (
    <form name='BasicAuthenticationForm' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

const getResourceData = ({ values, method, resource }) => ({
    type: resource.type,
    code: resource.code,
    url: normalizeURL(values.url),
    ...method.configuration(values)
});

const onSubmit = (values, dispatch, props) => {
    const payload = getResourceData({
        ...props,
        values
    });

    dispatch(
        actions.resource.saveResource(payload)
    );
};

const onTest = (values, dispatch, props) => {

    const payload = {
        ...getResourceData({
            ...props,
            values
        }),
        testURI: props.resource.testURI
    };

    dispatch(
        actions.resource.testResource(payload)
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
)(Basic)