import React from 'react';
import { authRoles } from 'app/auth';

const LandingPageConfig = {
	settings: {
        layout: {
			style: 'layout1',
            config: {
                navbar        : {
                    display: false
                },
                toolbar       : {
                    display: true,
                    style: "fixed"
                },
                footer        : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
		},
		customScrollbars: false,
		animations: true,
		direction: 'ltr',
        theme           : {
            main   : 'default',
            navbar : 'mainThemeDark',
            toolbar: 'mainThemeLight',
            footer : 'mainThemeDark'
        }
    },
    auth: authRoles.onlyGuest,
	routes: [
		{
            path: '/',
            exact: true,
			component: React.lazy(() => import('./LandingPage'))
		}
	]
};

export default LandingPageConfig;
