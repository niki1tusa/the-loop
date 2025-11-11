import { api } from '../api';

import { UserMock } from '@/src/shared/types/user-mock-types';

export const userMockApi = api.injectEndpoints({
	endpoints: builder => ({
		getMockUsers: builder.query<UserMock[], void>({
			queryFn: async () => {
				const res = await fetch('/api/users');
				const data: UserMock[] = await res.json();
				return { data };
			},
			providesTags: ['Users_mock'],
		}),
	}),
	overrideExisting: false,
});

export const { useGetMockUsersQuery } = userMockApi;
