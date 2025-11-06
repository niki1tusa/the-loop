import { Activity, CigaretteOff, Dumbbell, GlassWater } from 'lucide-react';

import { TMyHabitItem } from './today-types';

export const MY_HABIT_MOCK: TMyHabitItem[] = [
	{
		id: 1,
		title: 'Drink water',
		icon: GlassWater,
		quantity: 3,
		complete_quantity: 1,
		quantity_description: 'glass',
	},
	{
		id: 2,
		title: "Don't smok",
		icon: CigaretteOff,
		quantity: 1,
		complete_quantity: 0,
		quantity_description: null,
	},
	{
		id: 3,
		title: 'Morning stretching',
		icon: Dumbbell,
		quantity: 1,
		complete_quantity: 1,
		quantity_description: null,
	},
	{
		id: 4,
		title: 'Read a book',
		icon: Activity,
		quantity: 30,
		complete_quantity: 15,
		quantity_description: 'page',
	},
];
