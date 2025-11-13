'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';

import { TButtonProps } from '../../shared/types/button-types';

export default function Button({
	children,
	type = 'button',
	onClick,
	action,
	className,
	variant = 'btn-primary',
}: TButtonProps) {
	return (
		<motion.button
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 200, damping: 10 }}
			type={type}
			className={clsx(
				'rounded px-6 py-3 font-medium shadow shadow-neutral-400',
				className,
				variant
			)}
			onClick={onClick}
			formAction={action}
		>
			{children}
		</motion.button>
	);
}
