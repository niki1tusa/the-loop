'use client';

import { addDays, isSameDay, parseISO, subDays } from 'date-fns';
import { Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import Skeleton from '../Skeleton';
import Title from '../Title';

import CalendarHeader from './CalendarHeader';
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
		<section className='space-y-3'>
			<Title textSize='lg'>Calendar</Title>

			<div className='bg-card/90 text-card-foreground rounded-3xl shadow shadow-neutral-400'>
				<CalendarHeader days={dateCalendar} handleScrollCalendar={handleCalendarScroll} />

				<div className='p-4'>
					{/* week days */}
					<div className='text-muted-foreground border-muted mb-2 grid grid-cols-[minmax(0,1.3fr)_minmax(0,5fr)] gap-3 border-b px-3 pb-2 text-xs font-medium tracking-wide uppercase'>
						<b className='self-end'>Habit</b>
						<div className='flex justify-between gap-2'>
							{WEEK_DAYS.map((item, i) => (
								<b key={i} className='flex-1 px-1.5 text-center'>
									{item}
								</b>
							))}
						</div>
					</div>
					{/* habit list */}
					<div className='space-y-1.5'>
						{isLoading ? (
							<div className='bg-muted/40 rounded-2xl px-3 py-4'>
								<Skeleton />
							</div>
						) : habits && habits.length > 0 ? (
							habits.map(habit => {
								const historyForHabit = habitHistory?.filter(h => h.habit_id === habit.id) ?? [];

								return (
									<div
										key={habit.id}
										className='hover:bg-muted/40 grid grid-cols-[minmax(0,1.3fr)_minmax(0,5fr)] items-center gap-3 rounded-2xl px-3 py-2 transition-colors'
									>
										<div className='truncate text-sm font-medium'>{habit.title}</div>

										<AnimatePresence mode='wait'>
											<motion.div
												key={dateCalendar[0].getTime()}
												initial={{ opacity: 0, y: 4 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -4 }}
												transition={{ duration: 0.2 }}
												className='flex justify-between gap-2'
											>
												{dateCalendar.map(day => {
													const isCompleted = historyForHabit.some(h => {
														if (!h.completed_date) return false;
														return h.is_completed && isSameDay(parseISO(h.completed_date), day);
													});

													return (
														<span
															key={day.getTime()}
															className='flex flex-1 items-center justify-center'
														>
															{isCompleted ? (
																<span className='bg-secondary/10 border-secondary/40 inline-flex h-7 w-7 items-center justify-center rounded-xl border'>
																	<Check className='text-secondary h-4 w-4' />
																</span>
															) : (
																<span className='border-muted inline-flex h-7 w-7 items-center justify-center rounded-xl border'>
																	{/* <X className='text-muted-foreground h-4 w-4' /> */}
																</span>
															)}
														</span>
													);
												})}
											</motion.div>
										</AnimatePresence>
									</div>
								);
							})
						) : (
							<div className='border-border/70 text-muted-foreground rounded-2xl border border-dashed px-3 py-4 text-center text-sm'>
								Habits list is empty. Create your first habit to see it here.
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
