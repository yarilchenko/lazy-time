import React from 'react';
import { positions, Provider } from 'react-alert';
import AlertHandler from './AlertHandler';
import AlertTemplate from 'components/Alert';

const options = {
    offset: '0',
    timeout: 8000,
    position: positions.BOTTOM_CENTER,
    containerStyle: {
        zIndex: 100,
        width: '100%'
    }
};

export default class Alert extends React.Component {
    render() {
        return (
            <Provider template={AlertTemplate} {...options}>
                <AlertHandler />
            </Provider>
        );
    }
}
