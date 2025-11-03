import { TInputProps } from './input.types';

export default function Input({ placeholder = 'Enter text...', type, name }: TInputProps) {
	return <input type={type} name={name} placeholder={placeholder} />;
}
