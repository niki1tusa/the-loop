import { Metadata } from 'next';

import Calendar from '@/src/components/ui/Calendar';
import TodayCard from '@/src/components/ui/TodayCard';

export const metadata: Metadata = {
	title: 'Dashboard',
};
export default function DashboardPage() {
	return (
		<div className='flex gap-5'>
			<TodayCard />
			<Calendar />
		</div>
	);
}
