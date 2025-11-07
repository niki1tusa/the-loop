'use client';

import { addDays, startOfWeek } from 'date-fns';
import { Square, SquareCheck } from 'lucide-react';

import Skeleton from '../skeleton/Skeleton';
import Title from '../title/Title';

import { WEEK_DAYS } from '@/src/constants/global-constants';
import { useGetAllHabitsHistoryQuery } from '@/src/services/habit-history/habit-history-api';
import { useGetHabitsQuery } from '@/src/services/habit/habit-api';

export default function Calendar() {
	const { data: habits, isLoading: isLoadingHabit } = useGetHabitsQuery();
	const { data: habitHistory, isLoading: isLoadingHistory } = useGetAllHabitsHistoryQuery();

	const isLoading = isLoadingHabit || isLoadingHistory;
	const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
	return (
		<div className='flex flex-col gap-3'>
			<Title textSize='lg'>Calendar</Title>

			<div className='bg-card text-card-foreground flex flex-col gap-3 rounded-3xl shadow shadow-neutral-400'>
				<div className='flex justify-around gap-2 rounded-3xl bg-neutral-300 px-3 py-2'>
					<span>Weeks</span>
					<span>Monthly</span>
					<span>Yearly</span>
				</div>

				<ul className='flex flex-col px-3 py-2'>
					<li className='grid grid-cols-[1fr_3fr] gap-2'>
						<div />
						<div className='flex gap-2'>
							{WEEK_DAYS.map((item, i) => (
								<span className='px-1.5' key={i}>
									{item}
								</span>
							))}
						</div>
					</li>
					{isLoading ? (
						<Skeleton />
					) : habits && habits.length > 0 ? (
						habits.map(habit => {
							const filterHistory = habitHistory
								?.slice(-7)
								.filter(item => item.habit_id === habit.id);

							return (
								<li className='grid grid-cols-[1fr_3fr] gap-2' key={habit.id}>
									{habit.title}
									<div className='flex gap-2'>
										{WEEK_DAYS.map((_, i) => {
											const day = addDays(weekStart, i);
											const isCompleted = filterHistory?.some(item => item.is_completed);

											return (
												<span key={i}>
													{isCompleted ? <SquareCheck className='text-secondary' /> : <Square />}
												</span>
											);
										})}
									</div>
								</li>
							);
						})
					) : (
						<li>List habit is empty.</li>
					)}
				</ul>
			</div>
		</div>
	);
}
