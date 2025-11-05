import { FetchBaseQueryError, createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fakeBaseQuery<FetchBaseQueryError>(),
	tagTypes: ['Profile', 'Habits'],
	endpoints: () => ({}),
});
