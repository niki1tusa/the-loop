import TodayCard from '../../../components/today/TodayCard';

import Calendar from '@/src/components/calendar/Calendar';

export default function DashboardPage() {
	return (
		<div className='flex gap-5'>
			<div className='flex flex-col'>
				<TodayCard />
			</div>
			<Calendar />
		</div>
	);
}
