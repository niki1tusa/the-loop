'use client';

import { AnimatePresence, motion } from 'motion/react';

import Title from '../ui/Title';
import TodayListHabit from '../ui/habit/TodayListHabit';

import { useActiveHabit } from '@/src/store/zustand/activeHabit';

export default function MyHabitPageClient() {
	const activeHabit = useActiveHabit(state => state.activeHabit);
	return (
		<div className='flex gap-5 pt-3'>
			<div className='w-[300px]'>
				<TodayListHabit />
			</div>
			<AnimatePresence>
				{activeHabit && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='bg-card flex flex-col rounded-3xl px-3 py-2 shadow shadow-neutral-400'
					>
						<Title textSize='lg'>Panel Tools</Title>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
