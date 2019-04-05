import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';

class TimeLog extends Component {
    render() {
        return (
            <Grid>
                <Row xs={12} md={6}>
                    <Col>
                        Some test #1
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = {
};


export default connect(mapStateToProps, mapDispatchToProps)(TimeLog);