import {MaterialUIRoutes} from 'main/content/components/material-ui/MaterialUIRoutes';
import FuseThemeDoc from 'main/content/components/fuse-theme/FuseThemeDoc';
import FuseLayoutDoc from 'main/content/components/fuse-layout/FuseLayoutDoc';
import FusePageCardedDoc from 'main/content/components/fuse-page-carded/FusePageCardedDoc';
import FusePageSimpleDoc from 'main/content/components/fuse-page-simple/FusePageSimpleDoc';
import FuseScrollbarsDoc from 'main/content/components/fuse-scrollbars/FuseScrollbarsDoc';
import FuseHighlightDoc from 'main/content/components/fuse-highlight/FuseHighlightDoc';
import FuseCountdownDoc from 'main/content/components/fuse-countdown/FuseCountdownDoc';
import FuseNavigationDoc from 'main/content/components/fuse-navigation/FuseNavigationDoc';

export const ComponentsConfig = {
    routes: [
        ...MaterialUIRoutes,
        {
            path     : '/components/fuse-theme',
            component: FuseThemeDoc
        },
        {
            path     : '/components/fuse-layout',
            component: FuseLayoutDoc
        },
        {
            path     : '/components/fuse-page-carded',
            component: FusePageCardedDoc
        },
        {
            path     : '/components/fuse-page-simple',
            component: FusePageSimpleDoc
        },
        {
            path     : '/components/fuse-scrollbars',
            component: FuseScrollbarsDoc
        },
        {
            path     : '/components/fuse-highlight',
            component: FuseHighlightDoc
        },
        {
            path     : '/components/fuse-countdown',
            component: FuseCountdownDoc
        },
        {
            path     : '/components/fuse-navigation',
            component: FuseNavigationDoc
        }
    ]
};
