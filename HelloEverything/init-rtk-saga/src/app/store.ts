import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducer } from './reducer';
import rootSaga from './rootSaga';
import { routerMiddleware } from 'connected-react-router';
import { history } from '../utils';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware/*, routerMiddleware(history)*/),
});

// run after configureStore otherwise error
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
