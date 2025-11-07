'use client';

import { Square } from 'lucide-react';

import Title from '../title/Title';

import { WEEK_DAYS } from '@/src/constants/global-constants';
import { useGetHabitsQuery } from '@/src/services/habit/habit-api';

export default function Calendar() {
	const { data: habits } = useGetHabitsQuery();
	return (
		<div className='flex flex-col gap-3'>
			<Title textSize='lg'>Calendar</Title>
			{/* weekly */}
			<div className='bg-card text-card-foreground flex flex-col gap-3 rounded-3xl shadow shadow-neutral-400'>
				<div className='flex justify-around gap-2 rounded-3xl bg-neutral-300 px-3 py-2'>
					<span>Weeks</span> <span>Monthly</span>
					<span>Yearly</span>
				</div>
				<ul className='flex flex-col px-3 py-2'>
					<li className='grid grid-cols-[1fr_3fr]'>
						это для растояния
						<div className='flex gap-2'>
							{WEEK_DAYS.map((item, i) => (
								<span key={i}>{item}</span>
							))}
						</div>
					</li>

					{habits ? (
						habits.map(habit => (
							<li className='grid grid-cols-[1fr_3fr] gap-2' key={habit.id}>
								{habit.title}
								<div className='flex gap-2'>
									{WEEK_DAYS.map((_, i) => (
										<span key={i}>
											<Square />
										</span>
									))}
								</div>
							</li>
						))
					) : (
						<li>List habit is empty.</li>
					)}
				</ul>
			</div>
		</div>
	);
}
