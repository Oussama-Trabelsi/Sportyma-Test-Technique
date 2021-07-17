// Redux
import { combineReducers } from 'redux';
import configureStore from './CreateStore';
// Redux-saga
import rootSaga from 'src/redux-saga';
// Reducers
import { reducer as ClubReducer } from './club/Reducers';
import { reducer as PlayerReducer } from './player/Reducers';

export default () => {
  const appReducer = combineReducers({
    clubReducer: ClubReducer,
    playerReducer: PlayerReducer,
  });

  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
