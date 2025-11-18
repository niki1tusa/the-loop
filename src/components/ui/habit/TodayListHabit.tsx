'use client';

import { useEffect } from 'react';

import Skeleton from '../Skeleton';

import TodayHabitCard from './TodayHabitCard';
import {
	useCreateHabitHistoryDayMutation,
	useGetHabitsHistoryQuery,
	useUpdateHabitHistoryMutation,
} from '@/src/services/habit-history/habit-history-api';
import { useGetHabitsQuery } from '@/src/services/habit/habit-api';

export default function TodayListHabit() {
	// mutation
	const [updateCompleteHabit] = useUpdateHabitHistoryMutation();
	const [createHabitHistory] = useCreateHabitHistoryDayMutation();
	// query
	const { data: habits, isLoading: isLoadinHabit } = useGetHabitsQuery();
	const today = new Date().toISOString().split('T')[0];
	const { data: habitHistory, isLoading: isLoadingHistory } = useGetHabitsHistoryQuery(today);
	const isLoading = isLoadinHabit && isLoadingHistory;
	// handler
	const handleComplete = async (id: string) => {
		if (!id) return;
		try {
			await updateCompleteHabit(id).unwrap();
		} catch (error) {
			console.error('Update error:', error);
		}
	};
	// check habit history is exist
	useEffect(() => {
		if (!habits || !habitHistory) return;
		habits.forEach(habit => {
			const exist = habitHistory.some(item => item.habit_id === habit.id);
			if (!exist) createHabitHistory(habit.id);
		});
	}, [habits, habitHistory, createHabitHistory, today]);
	return (
		<ul className='flex min-h-0 flex-col gap-2.5 overflow-y-auto h-[300px]'>
			{!isLoading ? (
				habits?.map(item => {
					const todayHabitHistory = habitHistory?.find(habit => habit.habit_id === item.id);
					return (
						<TodayHabitCard
							key={item.id}
							habit={item}
							handleComplete={handleComplete}
							todayHabitHistory={todayHabitHistory}
						/>
					);
				})
			) : (
				<Skeleton />
			)}
		</ul>
	);
}
