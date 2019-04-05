import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconPassword from '@material-ui/icons/VpnKey';


class Configuration extends Component {
    state = {
        credentials: false,
        apiKey: false
    };

    render() {
        return(
            <Grid fluid={true}>
                <Row center='xs'>
                    <Col xs={12}>
                        Which method do you want to use?
                    </Col>
                </Row>
                <Row around='xs' center='xs'>
                    <Col xs={4}>
                        <IconPassword
                            color='primary'
                            fontSize='large'
                        />
                    </Col>
                    <Col xs={4}>
                        Api key
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Configuration;