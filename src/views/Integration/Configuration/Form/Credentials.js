import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import { reduxForm } from 'redux-form';
import { TextInput } from 'components/fields/index';
import styles from './Configuration.module.scss';
import { actions } from 'store';
import { required, isUrl } from 'utils/validations';
import * as configurations from 'config';

const Credentials = ({ resource, submitting, handleSubmit, onSubmit, onTryIt, successfully }) => (
    <Grid fluid={true}>
        <Row middle={'xs'} center={'xs'}>
            <Col xs={6} xlOffset={3}>
                <Row center='xs'>
                    <Col xs={8}>
                        <img src={resource.logo} alt={resource.description} className={styles.logo}/>
                    </Col>
                </Row>
                <Row>
                    <form name={resource.title} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col xs={12}>
                                <TextInput
                                    label={`${resource.title} base URL`}
                                    type="text"
                                    name="url"
                                    validate={[required, isUrl]}
                                />
                            </Col>
                        </Row>
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
                        <Row>
                            <Col xs={6}>
                                <Button
                                    type='button'
                                    color='secondary'
                                    disabled={submitting}
                                    onClick={handleSubmit(onTryIt)}
                                >
                                    Test it!
                                </Button>
                            </Col>
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
                </Row>
            </Col>
        </Row>
    </Grid>
);

const submitForm = (values, dispatch, props) => {
    const { resource } = props,
        connectedResource = resource.connect(values),
        resourceName = resource.title.toLowerCase();

    const configuration = {
        token: connectedResource.createToken(),
        headers: connectedResource.headers(),
        url: connectedResource.url()
    };

    console.log(configuration);

    dispatch(actions[props.resourceType].saveCredentials({
        resource: resourceName,
        configuration: {
            token: btoa(`${values.login}:${values.password}`)
        }
    }));

    dispatch(actions.common.redirectAfterCredentialSave());
};

const checkCredentials = (values, dispatch, form) => {
    dispatch(actions[form.resourceType].checkCredentials(values, form));
};

export default compose(
    reduxForm({
        form: 'CredentialsForm',
        onSubmit: submitForm,
        onTryIt: checkCredentials
    }),
    connect(
        ({ trackers }) => ({
            successfully: trackers.successfully
        })
    )
)(Credentials)