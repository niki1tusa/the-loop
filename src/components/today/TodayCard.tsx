'use client';

import { Square, SquareCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import Title from '../title/Title';

import { MY_HABIT_MOCK } from './today.data';

export default function TodayCard() {
	const [isComplete, setIsComplete] = useState<Set<number>>(new Set());
	const handleComplete = (id: number) => {
		setIsComplete(prev => {
			const newSet = new Set(prev);
			if (newSet.has(id)) {
				newSet.delete(id);
			} else {
				newSet.add(id);
			}
			return newSet;
		});
	};
	return (
		<div className='flex w-[300px] flex-col gap-3'>
			<Title textSize='lg'>Today</Title>

			<ul className='flex flex-col gap-2.5'>
				{MY_HABIT_MOCK.map(item => {
					const Icon = item.icon;
					const bool = isComplete.has(item.id);
					return (
						<motion.li
							whileHover={{
								y: -3,
								scale: 1.02,
								transition: { type: 'spring', stiffness: 200, damping: 15 },
							}}
							className='bg-card flex items-center justify-between rounded-3xl px-3 py-3 font-medium shadow shadow-neutral-400 hover:shadow-lg 2xl:text-xl'
							key={item.id}
						>
							<span className='flex items-center gap-2'>
								<Icon size={22} className='text-primary' />
								{item.title}
							</span>
							<button onClick={() => handleComplete(item.id)}>
								{bool ? <SquareCheck size={22} /> : <Square size={22} />}
							</button>
						</motion.li>
					);
				})}
			</ul>
		</div>
	);
}
