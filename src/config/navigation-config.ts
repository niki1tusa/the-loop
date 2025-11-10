import { CalendarFold, Dumbbell, LayoutDashboard, Settings, Trophy } from 'lucide-react';

import { NavItem } from '../shared/types/navigation-types';

export const NAVIGATION: NavItem[] = [
	{ id: 1, title: 'Dashboard', link: '/dashboard', icon: LayoutDashboard },
	{ id: 2, title: 'My Habits', link: '/my-habit', icon: Dumbbell },
	{ id: 3, title: 'Schedule', link: '/', icon: CalendarFold },
	{ id: 4, title: 'Achievements', link: '/', icon: Trophy },
	{ id: 5, title: 'Settings', link: '/', icon: Settings },
];
