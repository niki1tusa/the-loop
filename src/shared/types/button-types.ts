export type ButtonVariant = 'primary' | 'outline';

export type TButtonProps = {
	children: React.ReactNode;
	type?: 'button' | 'submit';
	onClick?: () => void;
	action?: (formData: FormData) => Promise<void>;
	className?: string;
	variant?: ButtonVariant;
};
export enum variantName {
	primary = 'btn-primary',
	outline = 'btn-outline',
}
