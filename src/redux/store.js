import { configureStore } from '@reduxjs/toolkit';
import { myFilterSlice } from './contacts/filterSlice';
import { contactsApi } from './contacts/contactApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: myFilterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware),

});

export const { filterContact } = myFilterSlice.actions;
