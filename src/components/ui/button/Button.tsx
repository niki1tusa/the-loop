'use client';

import { motion } from 'motion/react';

import { TButtonProps } from './button.types';

export default function Button({ children, type = 'button', onClick }: TButtonProps) {
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 200, damping: 10 }}
			type={type}
			className='bg-primary text-primary-foreground rounded-xl px-6 py-3 font-medium shadow shadow-neutral-400'
			onClick={onClick}
		>
			{children}
		</motion.button>
	);
}
