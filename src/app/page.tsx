import Sidebar from '../components/sidebar/Sidebar';

export default function Home() {
	return (
		<div className='grid h-screen grid-cols-[1fr_4fr]'>
			{/* navbar */}
			<Sidebar />
		</div>
	);
}
