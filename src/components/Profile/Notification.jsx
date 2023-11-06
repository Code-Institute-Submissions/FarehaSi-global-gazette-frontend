import React from 'react';

const Notification = ({ message, type }) => {
    if (!message) return null;

    const notificationStyle = type === 'error' ? 'danger' : 'success';

    return (
        <div className={`alert alert-${notificationStyle}`} role="alert">
            {message}
        </div>
    );
};

export default Notification;
