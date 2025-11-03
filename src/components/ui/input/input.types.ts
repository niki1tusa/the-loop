export type TInputProps = {
	type?: 'text' | 'number' | 'email' | 'password';
	placeholder?: string;
	name: string;
	required: boolean;
	label?: string;
};
