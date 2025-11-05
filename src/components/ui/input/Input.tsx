import { FieldValues } from 'react-hook-form';

import { TInputProps } from './input.types';

export default function Input<T extends FieldValues>({
	placeholder = 'Enter text...',
	type = 'text',
	name,
	required,
	label,
	register,
	errors,
}: TInputProps<T>) {
	const error = errors[name];
	return (
		<div className='flex flex-col gap-1'>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				{...register(name)}
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				className='ring-primary placeholder:text-muted text-foreground bg-card w-full rounded px-2 py-2 shadow shadow-neutral-400 ring-offset-0 transition-all outline-none hover:bg-gray-50 focus:shadow-lg focus:ring-2'
				required={required}
				autoComplete='new-password'
				data-lpignore='true'
			/>
			{error?.message && (
				<p className='rounded border border-red-900 bg-red-500 p-2 text-center text-sm text-red-900'>
					{error.message as string}
				</p>
			)}
		</div>
	);
}
