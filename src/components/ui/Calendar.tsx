'use client';

import { addDays, isSameDay, parseISO, startOfWeek } from 'date-fns';
import { Square, SquareCheck } from 'lucide-react';

import Skeleton from './Skeleton';
import Title from './Title';
import { WEEK_DAYS } from '@/src/constants/calendar-constants';
import { useGetAllHabitsHistoryQuery } from '@/src/services/habit-history/habit-history-api';
import { useGetHabitsQuery } from '@/src/services/habit/habit-api';

export default function Calendar() {
	const { data: habits, isLoading: isLoadingHabit } = useGetHabitsQuery();
	const { data: habitHistory, isLoading: isLoadingHistory } = useGetAllHabitsHistoryQuery();

	const isLoading = isLoadingHabit || isLoadingHistory;
	const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
	const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
	// TODO: объяснить по строчке
	return (
		<div className='flex flex-col gap-3'>
			<Title textSize='lg'>Calendar</Title>

			<div className='bg-card text-card-foreground flex flex-col gap-3 rounded-3xl shadow'>
				<div className='flex justify-around rounded-3xl bg-neutral-300 px-3 py-2'>
					<span>Weeks</span>
					<span>Monthly</span>
					<span>Yearly</span>
				</div>

				<ul className='flex flex-col px-3 py-2'>
					<li className='grid grid-cols-[1fr_3fr] gap-2'>
						<div />
						<div className='flex gap-2'>
							{WEEK_DAYS.map((item, i) => (
								<span key={i} className='px-1.5'>
									{item}
								</span>
							))}
						</div>
					</li>

					{isLoading ? (
						<li>
							<Skeleton />
						</li>
					) : habits && habits.length > 0 ? (
						habits.map(habit => {
							const historyForHabit = habitHistory?.filter(h => h.habit_id === habit.id) ?? [];

							return (
								<li className='grid grid-cols-[1fr_3fr] gap-2' key={habit.id}>
									<div>{habit.title}</div>
									<div className='flex gap-2'>
										{days.map(day => {
											const isCompleted = historyForHabit.some(h => {
												if (!h.completed_date) return false;
												return h.is_completed && isSameDay(parseISO(h.completed_date), day);
											});

											return (
												<span key={day.getTime()}>
													{isCompleted ? <SquareCheck className='text-secondary' /> : <Square />}
												</span>
											);
										})}
									</div>
								</li>
							);
						})
					) : (
						<li>Habits list is empty.</li>
					)}
				</ul>
			</div>
		</div>
	);
}
