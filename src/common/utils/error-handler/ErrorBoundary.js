import { Component } from 'react';
import { appError } from './actions';
import { logError } from './helpers';

export default class ErrorBoundary extends Component {
    static componentDidCatch(error, info) {
        logError(error);
        appError(error);
    }

    render() {
        return this.props.children;
    }
}
