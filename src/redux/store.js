import { configureStore } from '@reduxjs/toolkit';
import { myFilterSlice } from './contacts/filterSlice';
import { contactsApi } from './contacts/contactApi';
import { authApi } from './auth';
import authReducer from './auth/slice'

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    filter: myFilterSlice.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(contactsApi.middleware)
  .concat(authApi.middleware),

});

export const { filterContact } = myFilterSlice.actions;
