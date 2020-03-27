import React from 'react';
import { authRoles } from 'app/auth';

const ViewSubmissionPageConfig = {
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
			path: '/submissions/view',
			component: React.lazy(() => import('./ViewSubmission'))
		}
	]
};

export default ViewSubmissionPageConfig;
