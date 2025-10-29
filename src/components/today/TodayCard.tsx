'use client';

import { Square, SquareCheck } from 'lucide-react';
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
		<div className='bg-card w-[300px] rounded shadow shadow-neutral-400'>
			<div className='px-3 text-3xl'>
				<Title textSize='lg'>Today</Title>
			</div>
			<ul className='flex flex-col gap-2 px-3 py-2'>
				{MY_HABIT_MOCK.map(item => {
					const Icon = item.icon;
					const bool = isComplete.has(item.id);
					return (
						<li className='flex items-center justify-between' key={item.id}>
							<span className='flex items-center gap-2'>
								<Icon size={22} />
								{item.title}
							</span>
							<button onClick={() => handleComplete(item.id)}>
								{bool ? <SquareCheck size={22} /> : <Square size={22} />}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
