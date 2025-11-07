import type { Metadata } from 'next';

import MyHabitPageClient from '@/src/components/pages/MyHabitPageClient';

export const metadata: Metadata = {
	title: 'My Habit',
};

export default function MyHabitPage() {
	return <MyHabitPageClient />;
}
