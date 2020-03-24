import React from 'react';
import { authRoles } from 'app/auth';

const ViewProblemPageConfig = {
	settings: {
        layout: {
			style: 'layout1',
            config: {
                navbar        : {
                    display: true
                },
                toolbar       : {
                    display: false,
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
		cusrowtomScrollbars: false,
		animations: true,
		direction: 'ltr',
        theme           : {
            main   : 'default',
            navbar : 'mainThemeDark',
            toolbar: 'mainThemeLight',
            footer : 'mainThemeDark'
        }
    },
    auth: authRoles.user,
	routes: [
		{
			path: '/problems/view',
			component: React.lazy(() => import('./ViewProblem'))
		}
	]
};

export default ViewProblemPageConfig;
