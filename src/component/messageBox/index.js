import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = (props) => {

    if (props.display)
        return (
            <div data-test={'messageBox'}>
                your guess is success
            </div>
        );
    else
        return <></>
};

MessageBox.prototype={
    display:PropTypes.bool,
};
export default MessageBox;