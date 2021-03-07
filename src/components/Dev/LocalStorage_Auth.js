import React from 'react';

const LocalStorage_Auth = () => {
    return (
        <>
            <b>Local storage - msg-teamsprovider-auth-parameters</b>{JSON.stringify(localStorage.getItem('msg-teamsprovider-auth-parameters'))}
        </>
    );
}

export default LocalStorage_Auth;