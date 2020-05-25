import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm'
import { orm } from '../Model/orm'

import holding from './holdingReducer.js';
import networth from './networthReducer.js';

// import orderStatus from './selectOrderReducer';

const canopyReducer = combineReducers({ 
    holding,
    networth,
    orm: createReducer(orm)
})
export default canopyReducer;