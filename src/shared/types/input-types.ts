import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type TInputProps<T extends FieldValues> = {
	type?: 'text' | 'number' | 'email' | 'password';
	placeholder?: string;
	name: Path<T>;
	required: boolean;
	label?: string;
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
};
