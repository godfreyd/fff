import { combineReducers } from 'redux';

import { error } from './error';
import { loading } from './loading';
import { banners } from './banners';

export default combineReducers({
    error,
    loading,
    banners
});
