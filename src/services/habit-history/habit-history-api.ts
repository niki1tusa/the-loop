import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { api } from '../api';

import { completeHabitHistory, createHabitHistory, getHabitHistory } from './habit-history-service';
import { THabitHistory } from '@/src/types/habit-histoty-types';

export const habitsApi = api.injectEndpoints({
	endpoints: builder => ({
		// get
		getHabitsHistory: builder.query<THabitHistory[], string>({
			async queryFn(day) {
				try {
					const data = await getHabitHistory(day);
					return { data };
				} catch (err) {
					const message = err instanceof Error ? err.message : 'Unknown error';
					return { error: { status: 'CUSTOM_ERROR', data: message } as FetchBaseQueryError };
				}
			},
			providesTags: ['Habit_history'],
		}),
		// create
		createHabitHistoryDay: builder.mutation<THabitHistory, string>({
			async queryFn(idHabit) {
				try {
					const data = await createHabitHistory(idHabit);
					return { data };
				} catch (err: unknown) {
					const message = err instanceof Error ? err.message : 'Unknown error';
					return { error: { status: 'CUSTOM_ERROR', data: message } as FetchBaseQueryError };
				}
			},
			invalidatesTags: ['Habit_history'],
		}),
		// update
		updateHabitHistory: builder.mutation<THabitHistory, string>({
			async queryFn(id) {
				try {
					const data = await completeHabitHistory(id);
					return { data };
				} catch (err: unknown) {
					const message = err instanceof Error ? err.message : 'Unknown error';
					return { error: { status: 'CUSTOM_ERROR', data: message } as FetchBaseQueryError };
				}
			},
			invalidatesTags: ['Habit_history'],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetHabitsHistoryQuery,
	useCreateHabitHistoryDayMutation,
	useUpdateHabitHistoryMutation,
} = habitsApi;
