import { z } from 'zod';

export const zodSchemeCreateHabit = z.object({
	title: z.string().min(1, 'Title is required!'),
	quantity: z
		.string()
		.trim()
		.regex(/^\d+(?:[.,]\d+)?$/, 'Enter number!')
		.min(1, 'Quantity is required!'),
	quantity_description: z.string().min(1, 'Description is required!'),
});
export type TFormData = z.infer<typeof zodSchemeCreateHabit>;
