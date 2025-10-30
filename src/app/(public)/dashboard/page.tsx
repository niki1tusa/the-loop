import Sidebar from '../../../components/sidebar/Sidebar';
import Title from '../../../components/title/Title';
import TodayCard from '../../../components/today/TodayCard';

import Calendar from '@/src/components/calendar/Calendar';

export default function DashboardPage() {
	return (
		<div className='grid h-screen grid-cols-[1fr_4fr] gap-5'>
			{/* navbar */}
			<Sidebar />
			<div className='grid-row-[1fr_1fr] mt-5 grid gap-2'>
				<div className='flex gap-5'>
					<div className='flex flex-col'>
						<Title textSize='xl'>Dashboard</Title>
						<TodayCard />
					</div>
					<Calendar />
				</div>
				{/* other low section */}
				<div></div>
			</div>
		</div>
	);
}
