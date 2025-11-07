'use client';

import ListHabit from '../ui/list-habit/ListHabit';
import Title from '../ui/title/Title';

export default function MyHabitPageClient() {
	return (
		<div>
			<Title textSize='xl'>My Habit</Title>
			<div className='w-[300px]'>
				<ListHabit />
			</div>
		</div>
	);
}
