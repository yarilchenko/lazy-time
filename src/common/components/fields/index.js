import React from 'react';
import { Field } from 'redux-form';
import renderTextField from './TextField';


const TextInput = (props) =>
    <Field {...props} component={renderTextField}  />;

export {
    TextInput
}