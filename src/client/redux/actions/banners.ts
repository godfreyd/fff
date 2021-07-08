'use strict';

import * as types from '../constants/types';

export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/banners');
    // Отправка действий в Redux для обработки
    dispatch({
        type: types.banners.FETCH_ALL,
        payload: res,
    });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');
    // Отправка действий в Redux для обработки (изменяем state)
    dispatch({
        type: types.banners.FETCH_CURRENT,
        payload: res,
    });
};
