import { clsx } from 'clsx';

export default function Title({
	children,
	textSize = 'sm',
}: {
	children: React.ReactNode;
	textSize?: 'sm' | 'md' | 'lg' | 'xl';
}) {
	const text =
		textSize === 'sm'
			? 'text-lg'
			: textSize === 'md'
				? 'text-2xl'
				: textSize === 'lg'
					? 'text-3xl'
					: 'text-5xl';
	return <div className={clsx('font-rubik font-bold', text)}>{children}</div>;
}
