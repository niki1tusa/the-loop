'use client';

import { Square } from 'lucide-react';

import { useGetHabitsQuery } from '@/src/services/habit/habit-api';

export default function Calendar() {
	const week = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	const { data: habits } = useGetHabitsQuery();
	return (
		<div className='bg-card text-card-foreground rounded-3xl px-3 py-2 shadow shadow-neutral-400'>
			{/* weekly */}
			<div className='flex gap-2'>
				<ul className='flex flex-col'>
					<li className='opacity-0'>это для растояния</li>
					{habits ? (
						habits.map(habit => <li key={habit.id}>{habit.title}</li>)
					) : (
						<li>List habit is empty.</li>
					)}
				</ul>
				<ul className='flex gap-2'>
					{week.map((item, i) => (
						<li key={i}>
							{item} <Square />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
