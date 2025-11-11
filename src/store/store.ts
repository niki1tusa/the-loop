import { configureStore } from '@reduxjs/toolkit';

import { api } from '../services/api';

import modal from '@/src/store/modal-slice';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		modal,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
