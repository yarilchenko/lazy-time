import React, { Fragment, Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button/Button';
import { actions } from 'store';

const FORM_NAME = 'configuration';

export default function ConfigurationHOC(Form) {

    class Configuration extends Component {
        render() {
            const {
                handleSubmit,
                onSubmit,
                resource
            } = this.props;
            return (
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    resource={resource}
                    controls={this.controls}
                />
            );
        }

        controls = () => {
            const {
                resource,
                successfully,
                submitting,
                handleSubmit,
                onTest
            } = this.props;
            return (
                <Fragment>
                    {resource.testURI &&
                    <Col xs={6}>
                        <Button
                            type='button'
                            color='secondary'
                            disabled={submitting}
                            onClick={handleSubmit(onTest)}
                        >
                            Test it!
                        </Button>
                    </Col>
                    }
                    <Col xs={6}>
                        <Button
                            type='submit'
                            color='primary'
                            disabled={(successfully !== null && !successfully) || submitting}
                        >
                            Save
                        </Button>
                    </Col>
                </Fragment>
            );
        }
    }

    const collectResourceData = (values, props) => ({
        resource: props.resource,
        settings: {
            /**
             * TODO: fix input[type=hidden], label still rendered
             * TODO: move url as default value in form
             */
            url: props.resource.url || values.url,
            ...props.method.generate(values)
        },
        form: FORM_NAME
    });

    const onTest = (values, dispatch, props) => {
        dispatch(
            actions.resource.testResource(
                collectResourceData(values, props)
            )
        )
    };

    const onSubmit = (values, dispatch, props) => {
        dispatch(
            actions.resource.saveResource(
                collectResourceData(values, props)
            )
        )
    };

    return compose(
        reduxForm({
            form: FORM_NAME,
            onTest,
            onSubmit
        }),
        connect(
            ({ resource }) => ({
                successfully: resource.testSuccessfully
            })
        )
    )(Configuration)
}