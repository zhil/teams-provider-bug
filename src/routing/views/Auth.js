import React, {useEffect} from 'react';
import * as MicrosoftTeams from "@microsoft/teams-js/dist/MicrosoftTeams";
import {TeamsProvider} from '@microsoft/mgt-teams-provider';
import LocalStorage_Auth from "../../components/Dev/LocalStorage_Auth";

const Auth = () => {
    // console.log(TeamsProvider);
    useEffect(() => {
        TeamsProvider.microsoftTeamsLib = MicrosoftTeams;
        TeamsProvider.handleAuth();
        // TeamsProvider.testPatch();
    })

    return <>
        <h2>Loading, please wait</h2>
        <LocalStorage_Auth />
    </>
}

export default Auth;