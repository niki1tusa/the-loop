import { TInputProps } from './input.types';

export default function Input({
	placeholder = 'Enter text...',
	type = 'text',
	name,
	required,
	label,
}: TInputProps) {
	return (
		<div className='flex flex-col gap-1'>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				className='ring-primary placeholder:text-muted text-foreground bg-card rounded px-2 py-2 shadow shadow-neutral-400 ring-offset-0 transition-all outline-none hover:bg-gray-50 focus:shadow-lg focus:ring-2'
				required={required}
				autoComplete='new-password'
				data-lpignore='true'
			/>
		</div>
	);
}
