import { createStore, applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger';
import reducers from './combineReducers';
import rootSaga from './combineSagas'

import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native';

const loggerMiddleware = createLogger();
const middlewares = [thunkMiddleware];




if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(loggerMiddleware);

}

export default function configureStore() {
   const sagaMiddleware=createSagaMiddleware();
  let store = createStore(reducers,applyMiddleware(...middlewares,sagaMiddleware),autoRehydrate())
  persistStore(store,{storage:AsyncStorage,whitelist:['Login','Otp','Settings']});
  sagaMiddleware.run(rootSaga);
  return store
}
