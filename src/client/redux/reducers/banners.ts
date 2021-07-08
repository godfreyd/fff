'use strict';

import * as types from '../constants/types';
import initialState from '../constants/initialState';

/**
 * The user reducer is responsible
 * @method banners
 * @module eapteka/reducers
 * @param  {object} [state=initialState.banners] object
 * @param  {object} action                     Redux action
 * @return {object}                            next state
 */
export const banners = (state = initialState.banners, action) => {
    switch (action.type) {
        case types.banners.FETCH_ALL:
            return action.payload.data;
        default:
            return state;
    }
};
