import React from 'react';
import { authRoles } from 'app/auth';

const ListCoursesPageConfig = {
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
    auth: authRoles.user,
	routes: [
		{
			path: '/courses/list',
			component: React.lazy(() => import('./ListCourses'))
		}
	]
};

export default ListCoursesPageConfig;
