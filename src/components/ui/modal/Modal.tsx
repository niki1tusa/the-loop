'use client';

import { SquareX } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import Title from '../Title';

import { useClickOutside } from '@/src/hooks/useClickOutside';

interface Props {
	title: string;
	close: () => void;
	children: React.ReactNode;
}
export default function Modal({ title, children, close }: Props) {
	const { ref } = useClickOutside<HTMLDivElement>(() => close());
	return (
		<AnimatePresence>
			<div key='overlay' className='bg-opacity-50 bg-background/90 fixed inset-0 z-40' />
			<motion.div
				key='modal'
				initial={{ scale: 0.4, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.6 }}
				ref={ref}
				className='fixed top-1/2 left-1/2 z-50 max-w-md min-w-xs -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-4 text-black shadow-lg shadow-neutral-400'
			>
				<div className='mb-6 flex items-center justify-between'>
					<Title textSize='md'>{title}</Title>
					<button type='button' onClick={close} className='hover:text-red-600'>
						<SquareX />
					</button>
				</div>
				<div className='flex gap-3'>{children}</div>
			</motion.div>
		</AnimatePresence>
	);
}
