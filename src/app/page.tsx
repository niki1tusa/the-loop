import Sidebar from '../components/sidebar/Sidebar';

export default function Home() {
	return (
		<div className='grid h-screen grid-cols-[1fr_5fr]'>
			{/* navbar */}
			<Sidebar />
			<div>
				{/* title */}
				<div className='font-rubik text-4xl'>Dashboard</div>
				{/* day card (7 days) */}
				<ul></ul>
			</div>
		</div>
	);
}
