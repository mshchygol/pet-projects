/**
 * Created by myhailo on 1/17/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cart from './cart';
import phones from './phones';
import laptops from './laptops';

const rootReducer = combineReducers({
  cart,
  phones,
  laptops,
  routing: routerReducer
});

export default rootReducer;