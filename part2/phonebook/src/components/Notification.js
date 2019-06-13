import React from 'react';

const Notification = ({text, type}) => {

    if (type == undefined) {
        return null;
    } else {
        return (
            <div className={type} id="top-notification">
                {text}
            </div>
        )
    }

}

export default Notification