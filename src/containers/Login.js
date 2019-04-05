import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { authorize } from '../store/actions/user';
import Button from '@material-ui/core/Button';

class Login extends Component {
    render() {
        const { isAuthorized } = this.props;

        return (
            <Grid>
                <Row middle={'xs'}>
                    {!isAuthorized &&
                        <Col xs={12}>
                            <Row>
                                <Col xs={4}>
                                    <label for="api-key">
                                        Your API key:
                                    </label>
                                </Col>
                                <Col xs={8}>
                                    <input
                                        type="text"
                                        id="api-key"
                                        name="api-key"
                                    />
                                    <Button color='default'>Test</Button>
                                </Col>
                            </Row>
                        </Col>
                    }
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.user.isAuthorized
});
const mapDispatchToProps = {
    authorize
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);