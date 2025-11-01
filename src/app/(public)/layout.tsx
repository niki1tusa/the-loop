import Sidebar from '@/src/components/ui/sidebar/Sidebar';
import Title from '@/src/components/ui/title/Title';

export default function Publiclayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='grid h-screen grid-cols-[20%_80%] gap-5'>
			<Sidebar />
			<div className='mt-5 flex flex-col gap-2'>
				<Title textSize='xl'>Dashboard</Title>
				{children}
			</div>
		</div>
	);
}
