import React from 'react';
import styles from './Alert.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import IconClose from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

Alert.propTypes = {
    variant: PropTypes.oneOf(['error', 'success', 'info']),

    /**
     * Handle function for close button click
     */
    close: PropTypes.func,
    /**
     * For compatibility with react-alert
     */
    options: PropTypes.object,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

Alert.defaultProps = {
    variant: 'info',
    close: null,
    options: {}
};

/**
* Can be used as a custom alert template for https://github.com/schiehll/react-alert
*/
export default function Alert({variant, message, close, options, style, ...rest}) {
    const classes = classNames([styles.root, styles.message, styles[options.type || variant]]);
    return (
        <div className={classes} role='alert' {...rest} >
            <Typography variant='body1' color='inherit' align='center'>
                {message}
            </Typography>
            {close &&
                <IconButton onClick={close} classes={{root: styles.closeButton}}>
                    <IconClose fontSize='small' nativeColor='#fff' />
                </IconButton>
            }
        </div>
    );
}
