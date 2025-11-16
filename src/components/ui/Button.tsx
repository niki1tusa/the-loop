'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';

import { TButtonProps, variantName } from '../../shared/types/button-types';

export default function Button({
	children,
	type = 'button',
	onClick,
	action,
	className,
	variant = 'primary',
}: TButtonProps) {
	const variantClass = variantName[variant];
	return (
		<motion.button
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 200, damping: 10 }}
			type={type}
			className={clsx('btn-base', className, variantClass)}
			onClick={onClick}
			formAction={action}
		>
			{children}
		</motion.button>
	);
}
