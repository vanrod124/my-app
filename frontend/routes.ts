import { Flow } from '@vaadin/flow-frontend';
import { Route } from '@vaadin/router';
import './views/helloworld/hello-world-view';
import './views/main-layout';

const { serverSideRoutes } = new Flow({
  imports: () => import('../target/frontend/generated-flow-imports'),
});

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://hilla.dev/docs/routing)
  {
    path: '',
    component: 'hello-world-view',
    icon: '',
    title: '',
  },
  {
    path: 'hello',
    component: 'hello-world-view',
    icon: 'la la-globe',
    title: 'Hello World',
  },
  {
    path: 'about',
    component: 'about-view',
    icon: 'la la-file',
    title: 'About',
    action: async (_context, _command) => {
      await import('./views/about/about-view');
      return;
    },
  },
  {
    path: 'person-form',
    component: 'person-form-view',
    icon: 'la la-user',
    title: 'Person Form',
    action: async (_context, _command) => {
      await import('./views/personform/person-form-view');
      return;
    },
  },
  {
    path: 'map',
    component: 'map-view',
    icon: 'la la-map',
    title: 'Map',
    action: async (_context, _command) => {
      await import('./views/map/map-view');
      return;
    },
  },
  {
    path: 'list',
    component: 'list-view',
    icon: 'la la-th',
    title: 'List',
    action: async (_context, _command) => {
      await import('./views/list/list-view');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [
      ...views,
      // for server-side, the next magic line sends all unmatched routes:
      ...serverSideRoutes, // IMPORTANT: this must be the last entry in the array
    ],
  },
];
