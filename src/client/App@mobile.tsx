import { Registry, withRegistry } from '@bem-react/di';

import { AppCommon } from './App';
import { fetchCurrentUser } from './redux/actions/banners';

import {
  Header,
  Footer,
  Main,
  Page
} from './components/mobile';

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

export type IRegistryMobile = typeof components;
const AppMobile = withRegistry(registry)(AppCommon);

export default {
    component: AppMobile,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};