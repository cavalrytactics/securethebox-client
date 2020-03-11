import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import pagesConfigs from 'app/main/pages/pagesConfigs';

const routeConfigs = [
	...pagesConfigs
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, []),
	{
		path: '/',
		component: () => <Redirect to="/wizard"/>
	}
];

export default routes;
