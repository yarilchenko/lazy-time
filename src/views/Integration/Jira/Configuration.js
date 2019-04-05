import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import { reduxForm } from 'redux-form';
import logo from 'assets/images/jira-logo.png';
import { TextInput } from 'components/fields';
import styles from '../Configuration.module.scss';
import { jira, common } from 'store/actions';
import { required, isUrl } from 'utils/validations';

const JiraConfiguration = ({submitting, handleSubmit, onSubmit, onTryIt, successTested}) => (
    <Grid fluid={true}>
        <Row middle={'xs'} center={'xs'}>
            <Col xs={6} xlOffset={3}>
                <Row>
                    <Col xs={8} xsOffset={2}>
                        <img src={logo} alt='JIRA server integration' className={styles.logo}/>
                    </Col>
                </Row>
                <Row>
                    <form name='jira' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col xs={12}>
                                <TextInput
                                    label="JIRA base URL"
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
                                    disabled={(successTested !== null && !successTested) || submitting}
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

const submitForm = (values, dispatch, form) => {
    dispatch(jira.saveCredentials(values, form));
    dispatch(common.redirectAfterCredentialSave());
};

const checkCredentials = (values, dispatch, form) => {
    dispatch(jira.checkCredentials(values, form));
};

export default compose(
    reduxForm({
        form: 'JiraForm',
        onSubmit: submitForm,
        onTryIt: checkCredentials
    }),
    connect(
        ({ jira, rescuetime }) => ({
            successTested: jira.successTested,
            rescuetime: rescuetime.token
        })
    )
)(JiraConfiguration)