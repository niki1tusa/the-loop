import { CigaretteOff, Dumbbell, GlassWater, SquareActivity } from 'lucide-react';

import { TMyHabitItem } from './today.types';

export const MY_HABIT_MOCK: TMyHabitItem[] = [
	{ id: 1, title: 'Drink water', is_completed: false, icon: GlassWater },
	{ id: 2, title: "Don't smok", is_completed: false, icon: CigaretteOff },
	{ id: 3, title: 'Morning stretching', is_completed: false, icon: Dumbbell },
	{ id: 4, title: '10.000 steps', is_completed: false, icon: SquareActivity },
];
