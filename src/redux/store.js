import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { myFilterSlice } from './contacts/filterSlice';
import { contactsApi } from './contacts/contactApi';
import { authApi } from './auth';
import authReducer from './auth/slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  filter: myFilterSlice.reducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}), contactsApi.middleware, authApi.middleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware
})

export const { filterContact } = myFilterSlice.actions;
export const persistor = persistStore(store)
