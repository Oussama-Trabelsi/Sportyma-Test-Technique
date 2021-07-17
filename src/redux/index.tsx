// Redux
import { combineReducers } from 'redux';
import configureStore from './CreateStore';
// Redux-saga
import rootSaga from 'src/redux-saga';
// Reducers
import { reducer as ClubReducer } from './club/Reducers';

export default () => {
  const appReducer = combineReducers({
    clubReducer: ClubReducer,
  });

  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
