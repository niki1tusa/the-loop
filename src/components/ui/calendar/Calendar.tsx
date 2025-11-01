import { Square } from 'lucide-react';

export default function Calendar() {
	const week = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	const profile_habits = [
		{
			id: '1',
			title: 'Drink water',
			quantity: 1,
			complete_quantity: 1,
		},
		{
			id: '2',
			title: "Dont't smok",
			quantity: 1,
			complete_quantity: 0,
		},
	];
	return (
		<div className='bg-card text-card-foreground rounded-3xl px-3 py-2 shadow shadow-neutral-400'>
			{/* weekly */}
			<div className='flex gap-2'>
				<ul className='flex flex-col'>
					<li className='opacity-0'>это для растояния</li>
					{profile_habits.map(habit => (
						<li key={habit.id}>{habit.title}</li>
					))}
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
