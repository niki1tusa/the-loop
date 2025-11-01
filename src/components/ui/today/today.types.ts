import { LucideIcon } from 'lucide-react';

export type TMyHabitItem = {
	id: number;
	title: string;
	icon: LucideIcon;
	quantity: number;
	complete_quantity: number;
	quantity_description: string | null;
};
