import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		'id': 'courses',
		'title': 'Courses',
		'translate': 'Courses',
		'type': 'group',
		'icon': 'apps',
		'children': [
			{
				'id': 'courses-add',
				'title': 'Create',
				'translate': 'CREATE',
				'type': 'item',
				'icon': 'whatshot',
				'url': '/courses/create'
			},
			{
				'id': 'courses-list',
				'title': 'List',
				'translate': 'LIST',
				'type': 'item',
				'icon': 'whatshot',
				'url': '/courses/list'
			}
		]
	},
	{
		'type': 'divider',
		'id': 'divider-1'
	},
	{
		'id': 'applications',
		'title': 'Applications',
		'translate': 'Applications',
		'type': 'group',
		'icon': 'apps',
		'children': [
			{
				'id': 'applications-add',
				'title': 'Create',
				'translate': 'CREATE',
				'type': 'item',
				'icon': 'whatshot',
				'url': '/applications/create'
			},
			{
				'id': 'applications-list',
				'title': 'List',
				'translate': 'LIST',
				'type': 'item',
				'icon': 'whatshot',
				'url': '/applications/list'
			}
		]
	},
	{
		'type': 'divider',
		'id': 'divider-2'
	},
	{
		'id': 'problems',
		'title': 'Problems',
		'translate': 'Problems',
		'type': 'group',
		'icon': 'apps',
		'children': [
			{
				'id': 'problems-add',
				'title': 'Create',
				'translate': 'CREATE',
				'type': 'item',
				'icon': 'whatshot',
				'url': '/problems/create'
			},
			{
				'id': 'problems-list',
				'title': 'List',
				'translate': 'LIST',
				'type': 'item',
				'icon': 'whatshot',
				'url': '/problems/list'
			}
		]
	},
	{
		'type': 'divider',
		'id': 'divider-3'
	},
	{
		'id': 'solutions',
		'title': 'Solutions',
		'translate': 'Solutions',
		'icon': 'apps',
		'type': 'group',
		'children': [
			{
				'id': 'solutions-add',
				'title': 'Create',
				'translate': 'CREATE',
				'type': 'item',
				'icon': 'whatshot',
				'url': '/solutions/create'
			},
			{
				'id': 'solutions-list',
				'title': 'List',
				'translate': 'LIST',
				'type': 'item',
				'icon': 'whatshot',
				'url': '/solutions/list'
			}
		]
	},
	{
		'type': 'divider',
		'id': 'divider-4'
	},
];

export default navigationConfig;
