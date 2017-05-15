/**
 * Created by myhailo on 1/17/17.
 */
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from '../reducers/index';

const enhancers = compose( window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;