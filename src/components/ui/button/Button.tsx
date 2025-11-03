'use client';

import { motion } from 'motion/react';

import { TButtonProps } from './button.types';

export default function Button({ children, type = 'button', onClick, action }: TButtonProps) {
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 200, damping: 10 }}
			type={type}
			className='bg-primary text-primary-foreground rounded px-4 py-2 font-medium shadow shadow-neutral-400'
			onClick={onClick}
			formAction={action}
		>
			{children}
		</motion.button>
	);
}
