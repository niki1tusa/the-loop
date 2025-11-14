'use client';

import { useEffect } from 'react';

import HabitCard from './HabitCard';
import Skeleton from './Skeleton';
import {
	useCreateHabitHistoryDayMutation,
	useGetHabitsHistoryQuery,
	useUpdateHabitHistoryMutation,
} from '@/src/services/habit-history/habit-history-api';
import { useGetHabitsQuery } from '@/src/services/habit/habit-api';
import { ICONS } from '@/src/shared/types/icons-types';

export default function ListHabit() {
	const [updateCompleteHabit] = useUpdateHabitHistoryMutation();
	const [createHabit] = useCreateHabitHistoryDayMutation();
	const { data: habits, isLoading } = useGetHabitsQuery();
	const today = new Date().toISOString().split('T')[0];
	const { data: habitHistory } = useGetHabitsHistoryQuery(today);
	const handleComplete = async (id: string) => {
		if (!id) return;
		try {
			await updateCompleteHabit(id).unwrap();
		} catch (error) {
			console.error('Update error:', error);
		}
	};

	useEffect(() => {
		if (!habits || !habitHistory) return;
		habits.forEach(habit => {
			const exist = habitHistory.some(item => item.habit_id === habit.id);
			if (!exist) createHabit(habit.id);
		});
	}, [habits, habitHistory, createHabit, today]);
	return (
		<ul className='flex flex-col gap-2.5'>
			{!isLoading ? (
				habits?.map(item => {
					const Icon = ICONS[item.icon_name];
					const todayHabitHistory = habitHistory?.find(habit => habit.habit_id === item.id);
					return (
						<HabitCard
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
