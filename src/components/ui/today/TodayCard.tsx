'use client';

import clsx from 'clsx';
import { Square, SquareCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../button/Button';
import Title from '../title/Title';

import { useGetHabitsQuery, useUpdateQuantityHabitMutation } from '@/src/services/habit/habit-api';
import { open } from '@/src/store/modal-slice';

export default function TodayCard() {
	const [isComplete, setIsComplete] = useState<Set<string>>(new Set());
	const handleComplete = async (id: string) => {
		setIsComplete(prev => {
			const newSet = new Set(prev);
			if (newSet.has(id)) {
				newSet.delete(id);
			} else {
				newSet.add(id);
			}
			try {
				mutation(id).unwrap();
			} catch (error) {
				console.error('Update error:', error);
			}
			return newSet;
		});
	};
	const [mutation, result] = useUpdateQuantityHabitMutation();
	const { data: habits } = useGetHabitsQuery();
	const dispatch = useDispatch();

	return (
		<div className='flex w-[300px] flex-col gap-3'>
			<Title textSize='lg'>Today</Title>

			<ul className='flex flex-col gap-2.5'>
				{habits?.map(item => {
					// const Icon = item.icon;
					const bool = isComplete.has(item.id);
					return (
						<motion.li
							whileHover={{
								y: -3,
								scale: 1.02,
								transition: { type: 'spring', stiffness: 200, damping: 15 },
							}}
							className={clsx(
								'flex items-center justify-between rounded-3xl px-3 py-3 font-medium shadow hover:shadow-lg 2xl:text-xl',
								item.is_completed ? 'text-secondary bg-green-200' : 'bg-card'
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
										{item.is_completed ? item.quantity : 0}/{item.quantity}{' '}
										{item.quantity_description}
									</span>
								</div>
							</div>
							<button
								disabled={!!item.is_completed}
								onClick={() => {
									handleComplete(item.id);
								}}
							>
								{bool ? <SquareCheck className='text-secondary' size={22} /> : <Square size={22} />}
							</button>
						</motion.li>
					);
				})}
			</ul>
			<Button onClick={() => dispatch(open({ type: 'createHabit' }))}>Add habit</Button>
		</div>
	);
}
