import { createApi } from '@reduxjs/toolkit/query/react';

import { Database } from '../types/db.types';

import { getProfileById } from './profile.service';

export type TProfile = Database['public']['Tables']['profiles']['Row'];
export const api = createApi({
	reducerPath: 'api',
	baseQuery: async () => ({ data: null }),
	endpoints: builder => ({
		getProfile: builder.query<TProfile, void>({
			async queryFn() {
				try {
					const data = await getProfileById();
					return { data };
				} catch (error: any) {
					return { error: { status: 'CUSTOM_ERROR', data: error.message } };
				}
			},
		}),
	}),
});

export const { useGetProfileQuery } = api;
