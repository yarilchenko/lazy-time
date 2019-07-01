import React from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { compose } from 'redux';

class AlertHandler extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.message !== nextProps.message;
    }

    componentDidUpdate() {
        const { message, alert } = this.props;
        if (!message.text) return;
        switch (message.type) {
            case 'error':
                alert.error(message.text);
                break;
            case 'success':
                alert.success(message.text);
                break;
            case 'info':
            default:
                alert.info(message.text);
                break;
        }
    }

    render() {
        return null;
    }
}

export default compose(
    withAlert(),
    connect(({ alertMessage }) => ({ message: alertMessage }))
)(AlertHandler);
