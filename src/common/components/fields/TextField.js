import React from 'react';
import Input from '@material-ui/core/TextField/TextField';
import styles from './Fields.module.scss';

export default ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => (
    <React.Fragment>
        <Input
            label={label}
            margin='normal'
            error={touched && !!error}
            variant='outlined'
            fullWidth={true}
            {...input}
            {...custom}
        />
        {touched && error && <span className={styles.error}>{error}</span>}
    </React.Fragment>
);