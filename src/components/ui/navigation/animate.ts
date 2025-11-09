import { Variants } from 'motion';

export const navVariants: Variants = {
	open: {
		width: '100%',
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 25,
			when: 'beforeChildren',
			staggerChildren: 0.05,
		},
	},
	closed: {
		width: '10%',
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 30,
			when: 'afterChildren',
		},
	},
};

export const textNavVariants = {
	open: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.3 },
		staggerChildren: 0.05,
		delayChildren: 0.1,
	},
	closed: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};
export const borderVariants: Variants = {
	open: {
		scaleX: 1,
		opacity: 1,
		filter: 'blur(0px)',
		transition: { duration: 0.4, ease: 'easeInOut' },
	},
	closed: {
		scaleX: 0,
		opacity: 0,
		filter: 'blur(2px)',
		transition: { duration: 0.5, ease: 'easeInOut' },
	},
};
