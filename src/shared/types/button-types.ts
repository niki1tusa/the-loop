export type TButtonProps = {
	children: React.ReactNode;
	type?: 'button' | 'submit';
	onClick?: () => void;
	action?: (formData: FormData) => Promise<void>;
	className?: string;
	variant?: string;
};
