import { TButtonProps } from './button.types';

export default function Button({ children, type = 'button', onClick }: TButtonProps) {
	return (
		<button
			type={type}
			className='bg-primary text-primary-foreground px-3 py-2 shadow shadow-neutral-400'
			onClick={onClick}
		>
			{children}
		</button>
	);
}
