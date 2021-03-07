import React from 'react';
// import * as microsoftTeams from "@microsoft/teams-js/dist/MicrosoftTeams";
import { Login } from '@microsoft/mgt-react';
//
import LocalStorage_Auth from "../../components/Dev/LocalStorage_Auth";

const Tab = () => {
    // console.log(microsoftTeams);
    // const doLogin = () => {
    //     microsoftTeams.authentication.authenticate({
    //         url: window.location.origin + "/auth2",
    //         width: 600,
    //         height: 535,
    //         successCallback: function (result) {
    //             // getUserProfile(result.accessToken);
    //             console.log('successCallback', result);
    //         },
    //         failureCallback: function (reason) {
    //             // handleAuthError(reason);
    //             console.log('failureCallback', reason);
    //         }
    //     });
    //
    // }
    return <>
        <h2>Tab - auth2</h2>
        <LocalStorage_Auth />
        <hr />
        {/*<button onClick={doLogin}>Login</button>*/}
        <Login />
    </>
}

export default Tab;