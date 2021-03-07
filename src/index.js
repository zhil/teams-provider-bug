import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Providers} from '@microsoft/mgt-element';
import {TeamsProvider} from '@microsoft/mgt-teams-provider';
import * as MicrosoftTeams from "@microsoft/teams-js/dist/MicrosoftTeams";

// import {Logger} from 'msal';

MicrosoftTeams.initialize();
//
// const loggerCallback = (logLevel, message, containsPii) => {
//     console.log(message);
// }
//
TeamsProvider.microsoftTeamsLib = MicrosoftTeams;
Providers.globalProvider = new TeamsProvider ({
    clientId: process.env.REACT_APP_AZURE_APP_REGISTRATION_ID,
    authPopupUrl: '/auth',
    scopes: ['Application.Read.All','Channel.ReadBasic.All','ChannelMessage.Read.All','ChannelMessage.Send','ChannelSettings.Read.All','Chat.ReadWrite','Directory.ReadWrite.All',' openid','profile','Team.ReadBasic.All','User.Read email'],
    // msalOptions: {
    //     auth: {
    //         clientId: process.env.REACT_APP_AZURE_APP_REGISTRATION_ID,
    //     },
    //     system: {
    //         logger: new Logger(
    //             loggerCallback , {
    //                 level: 3, // Msal.LogLevel.Verbose
    //                 piiLoggingEnabled: false,
    //                 correlationId: '1234'
    //             }
    //         )
    //     }
    // }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
