'use client';

import { addDays, isSameDay, parseISO, subDays } from 'date-fns';
import { Square, SquareCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import CalendarHeader from './CalendarHeader';
import Skeleton from './Skeleton';
import Title from './Title';
import { WEEK_DAYS } from '@/src/constants/calendar-constants';
import { useCalendar } from '@/src/hooks/useCalendar';

export default function Calendar() {
	const { habits, habitHistory, isLoading, dateCalendar, setDateCalendar } = useCalendar();
	const handleCalendarScroll = (arg: 'left' | 'right') => {
		setDateCalendar(prev =>
			prev.map(date => (arg === 'left' ? subDays(date, 7) : addDays(date, 7)))
		);
	};
	return (
		<div className='flex flex-col gap-3'>
			<Title textSize='lg'>Calendar</Title>
			<div className='bg-card text-card-foreground flex flex-col gap-3 rounded-3xl shadow'>
				<CalendarHeader days={dateCalendar} handleScrollCalendar={handleCalendarScroll} />

				<ul className='flex flex-col px-3 pb-2'>
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
									<div className='text-sm'>{habit.title}</div>
									<AnimatePresence mode='wait'>
										<motion.div
											key={dateCalendar[0].getTime()}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 1 }}
											exit={{ opacity: 0 }}
											className='flex gap-2'
										>
											{dateCalendar.map(day => {
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
										</motion.div>
									</AnimatePresence>
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
