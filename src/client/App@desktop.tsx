import { Registry, withRegistry } from '@bem-react/di';

import { AppCommon } from './App';
import { fetchCurrentUser } from './redux/actions/banners';

import {
  Header,
  Footer,
  Main,
  Page
} from './components/desktop';

const registry = new Registry({ id: 'app' });

const components = {

    /* Common */
    Header,
    Footer,
    Main,
    Page
};

for (const name of Object.keys(components)) {
    const component = (components as any)[name]; // tslint:disable-line:no-any

    registry.set(name, component);
}

export type IRegistryDesktop = typeof components;
const AppDesktop = withRegistry(registry)(AppCommon);

export default {
    component: AppDesktop,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};