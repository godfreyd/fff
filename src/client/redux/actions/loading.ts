'use strict';

import * as types from '../constants/types';

/**
 * Put the app in a loading state
 * @method loading
 
 * @return {object}
 */
export const loading = () => {
    return {
        type: types.app.LOADING,
    };
};

/**
 * Put the app in a loaded state
 * @method loaded
 
 * @return {object}
 */
export const loaded = () => {
    return {
        type: types.app.LOADED,
    };
};
