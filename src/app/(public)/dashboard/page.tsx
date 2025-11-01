import Calendar from '@/src/components/ui/calendar/Calendar';
import TodayCard from '@/src/components/ui/today/TodayCard';

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
