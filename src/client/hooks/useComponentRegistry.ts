import { useComponentRegistry as useComponentRegistryBase } from '@bem-react/di';

import { IRegistryDesktop } from '../App@desktop';
import { IRegistryMobile } from '../App@mobile';

export function useComponentRegistry() {
    return useComponentRegistryBase<IRegistryDesktop|IRegistryMobile>('app');
}
