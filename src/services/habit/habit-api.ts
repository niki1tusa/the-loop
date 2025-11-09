import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { api } from '../api';

<<<<<<< HEAD
import { createHabit, deleteHabit, getProfileHabits } from './habit-service';
import { THabit, THabitInsert } from '@/src/types/habit-types';
=======
import { createHabit, getProfileHabits } from './habit-service';
import { THabit, THabitInsert } from '@/src/shared/types/habit-types';
>>>>>>> 186c06c47298a4c65120c690fee9a33d52619498

export const habitsApi = api.injectEndpoints({
	endpoints: builder => ({
		// get
		getHabits: builder.query<THabit[], void>({
			async queryFn() {
				try {
					const data = await getProfileHabits();
					return { data };
				} catch (err) {
					const message = err instanceof Error ? err.message : 'Unknown error';
					return { error: { status: 'CUSTOM_ERROR', data: message } as FetchBaseQueryError };
				}
			},
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Habits' as const, id })),
							{ type: 'Habits', id: 'LIST' },
						]
					: [{ type: 'Habits', id: 'LIST' }],
		}),
		// create
		createHabit: builder.mutation<THabit, Omit<THabitInsert, 'profile_id'>>({
			async queryFn(fields) {
				try {
					const data = await createHabit(fields);
					return { data };
				} catch (err: unknown) {
					const message = err instanceof Error ? err.message : 'Unknown error';
					return { error: { status: 'CUSTOM_ERROR', data: message } as FetchBaseQueryError };
				}
			},
			invalidatesTags: [{ type: 'Habits', id: 'LIST' }],
		}),
		// delete
		deleteHabit: builder.mutation<void, string>({
			async queryFn(id) {
				try {
					await deleteHabit(id);
					return { data: undefined };
				} catch (err: unknown) {
					const message = err instanceof Error ? err.message : 'Unknown error';
					return { error: { status: 'CUSTOM_ERROR', data: message } as FetchBaseQueryError };
				}
			},
			invalidatesTags: [{ type: 'Habits', id: 'LIST' }],
		}),
	}),
	overrideExisting: false,
});

export const { useGetHabitsQuery, useCreateHabitMutation, useDeleteHabitMutation } = habitsApi;
