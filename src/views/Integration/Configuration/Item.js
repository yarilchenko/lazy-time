import React from 'react';
import { connect } from 'react-redux';
import trackers from 'config/trackers';

const ConfigurationItem = ({ match: { params } }) => {
    const resource = trackers.find((resource) => resource.title === params.title),
        { component: ConfigurationScreen } = resource.methods.find((method) => method.code === params.method);

    return (
        <ConfigurationScreen resource={resource} resourceType={params.type} />
    )
};

export default connect()(ConfigurationItem)