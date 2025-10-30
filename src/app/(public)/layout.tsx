import Sidebar from '@/src/components/sidebar/Sidebar';
import Title from '@/src/components/title/Title';

export default function Publiclayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='grid h-screen grid-cols-[1fr_4fr] gap-5'>
			<Sidebar />
			<div className='mt-5 flex flex-col gap-2'>
				<Title textSize='xl'>Dashboard</Title>
				{children}
			</div>
		</div>
	);
}
