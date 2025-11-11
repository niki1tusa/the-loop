'use client';

import Calendar from '../ui/Calendar';
import LiderBoard from '../ui/LiderBoard';
import TodayCard from '../ui/TodayCard';

export default function DashboardPageClient() {
	return (
		<div className='flex gap-5'>
			<TodayCard />
			<Calendar />
			<LiderBoard />
		</div>
	);
}
