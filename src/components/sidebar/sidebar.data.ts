import { CalendarFold, Dumbbell, LayoutDashboard, Settings, Trophy } from 'lucide-react';

import { TNavItem } from './sidebar.types';

export const NAV_DATA: TNavItem[] = [
	{ id: 1, title: 'Dashboard', link: '/', icon: LayoutDashboard },
	{ id: 2, title: 'Schedule', link: '/', icon: CalendarFold },
	{ id: 3, title: 'My Habits', link: '/', icon: Dumbbell },
	{ id: 4, title: 'Achievements', link: '/', icon: Trophy },
	{ id: 5, title: 'Settings', link: '/', icon: Settings },
];
