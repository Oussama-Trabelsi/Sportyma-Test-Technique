// Redux
import { combineReducers } from 'redux';
import configureStore from './CreateStore';
// Redux-saga
import rootSaga from 'Src/redux-saga';
// Reducers
import { reducer as AuthReducer } from './auth/Reducers';
import { reducer as UserReducer } from './user/Reducers';
import { reducer as PlanningReducer } from './planning/Reducers';
import { reducer as MaintenanceLogReducer } from './maintenanceLog/Reducers';
import { reducer as AbsenceReducer } from './absence/Reducers';
import { reducer as ChoiceMapReducer } from './choiceMap/Reducers';
import { reducer as TicketReducer } from './ticket/Reducers';

export default () => {
  const appReducer = combineReducers({
    loginReducer: AuthReducer,
    userReducer: UserReducer,
    planningReducer: PlanningReducer,
    maintenanceLogReducer: MaintenanceLogReducer,
    absenceReducer: AbsenceReducer,
    choiceMapReducer: ChoiceMapReducer,
    ticketReducer: TicketReducer,
  });

  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
