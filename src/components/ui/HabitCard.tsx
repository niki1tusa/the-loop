import clsx from 'clsx';
import { Square, SquareCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function HabitCard({ todayHabitHistory, habit }: {}) {
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
		>
			<div className='flex items-center gap-2'>
				<div className='rounded-md bg-sky-50 p-2 shadow shadow-neutral-400'>
					<Icon size={28} className='text-primary' />
				</div>
				<div className='flex flex-col'>
					<span>{habit.title}</span>
					<span className='text-muted text-sm'>
						{todayHabitHistory?.is_completed ? habit.quantity : 0}/{habit.quantity}{' '}
						{habit.quantity_description}
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
}
