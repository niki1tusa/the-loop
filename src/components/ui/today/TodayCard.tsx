'use client';

import clsx from 'clsx';
import { Square, SquareCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../button/Button';
import Skeleton from '../skeleton/Skeleton';
import Title from '../title/Title';

import {
	useCreateHabitHistoryDayMutation,
	useGetHabitsHistoryQuery,
	useUpdateHabitHistoryMutation,
} from '@/src/services/habit-history/habit-history-api';
import { useGetHabitsQuery } from '@/src/services/habit/habit-api';
import { open } from '@/src/store/modal-slice';

export default function TodayCard() {
	const [mutation] = useUpdateHabitHistoryMutation();
	const [createHabit] = useCreateHabitHistoryDayMutation();
	const { data: habits, isLoading } = useGetHabitsQuery();
	const today = new Date().toISOString().split('T')[0];
	const { data: habitHistory } = useGetHabitsHistoryQuery(today);
	const dispatch = useDispatch();
	const handleComplete = async (id: string) => {
		if (!id) return;
		try {
			await mutation(id).unwrap();
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
		<div className='flex w-[300px] flex-col gap-3'>
			<Title textSize='lg'>Today</Title>

			<ul className='flex flex-col gap-2.5'>
				{!isLoading ? (
					habits?.map(item => {
						// const Icon = item.icon;
						const todayHabitHistory = habitHistory?.find(habit => habit.habit_id === item.id);
						return (
							<motion.li
								whileHover={{
									y: -3,
									scale: 1.02,
									transition: { type: 'spring', stiffness: 200, damping: 15 },
								}}
								className={clsx(
									'flex items-center justify-between rounded-3xl px-3 py-3 font-medium shadow hover:shadow-lg 2xl:text-xl',
									todayHabitHistory?.is_completed ? 'text-secondary bg-green-200' : 'bg-card'
								)}
								key={item.id}
							>
								<div className='flex items-center gap-2'>
									<div className='rounded bg-sky-50 p-2 shadow shadow-neutral-400'>
										{/* <Icon size={28} className='text-primary' /> */}
									</div>
									<div className='flex flex-col'>
										<span>{item.title}</span>
										<span className='text-muted text-sm'>
											{todayHabitHistory?.is_completed ? item.quantity : 0}/{item.quantity}{' '}
											{item.quantity_description}
										</span>
									</div>
								</div>
								<button
									disabled={!!todayHabitHistory?.is_completed}
									onClick={() => {
										handleComplete(todayHabitHistory?.id ?? '');
									}}
								>
									{todayHabitHistory?.is_completed ? (
										<SquareCheck className='text-secondary' size={22} />
									) : (
										<Square size={22} />
									)}
								</button>
							</motion.li>
						);
					})
				) : (
					<Skeleton />
				)}
			</ul>
			<Button onClick={() => dispatch(open({ type: 'createHabit' }))}>Add habit</Button>
		</div>
	);
}
