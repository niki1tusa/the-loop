import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { api } from '../api';

import { getProfileById } from './profile-service';
import { Profile } from '@/src/shared/types/profile-types';

export const habitsApi = api.injectEndpoints({
	endpoints: builder => ({
		getProfile: builder.query<Profile, void>({
			async queryFn() {
				try {
					const data = await getProfileById();
					return { data };
				} catch (err: unknown) {
					const message = err instanceof Error ? err.message : 'Unknown error';
					return { error: { status: 'CUSTOM_ERROR', data: message } as FetchBaseQueryError };
				}
			},
			providesTags: ['Profile'],
		}),
	}),
	overrideExisting: false,
});

export const { useGetProfileQuery } = habitsApi;
