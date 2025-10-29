import Sidebar from '../components/sidebar/Sidebar';
import Title from '../components/title/Title';
import TodayCard from '../components/today/TodayCard';

export default function Home() {
	return (
		<div className='grid h-screen grid-cols-[1fr_4fr] gap-5'>
			{/* navbar */}
			<Sidebar />
			<div className='mt-5 flex flex-col gap-2'>
				<Title textSize='xl'>Dashboard</Title>
				<TodayCard />
			</div>
		</div>
	);
}
