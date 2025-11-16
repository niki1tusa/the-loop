'use client';

import Achivment from '../ui/Achivment';
import LiderBoard from '../ui/LiderBoard';
import TodayCard from '../ui/TodayCard';
import Calendar from '../ui/calendar/Calendar';

export default function DashboardPageClient() {
	return (
		<div className='flex gap-5'>
			<TodayCard />
			<div className='flex flex-col gap-5'>
				<Calendar />
				<Achivment />
			</div>
			<LiderBoard />
		</div>
	);
}
