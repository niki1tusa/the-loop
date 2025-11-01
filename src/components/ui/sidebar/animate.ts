import { Variants } from 'motion';

export const navVariants: Variants = {
	open: {
		width: '100%',
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 30,
			when: 'beforeChildren',
			staggerChildren: 0.05,
		},
	},
	closed: {
		width: '10%',
		transition: { type: 'spring', stiffness: 300, damping: 30, when: 'afterChildren' },
	},
};

export const textNavVariants = {
	open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
	closed: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};
