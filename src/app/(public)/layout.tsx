import { redirect } from 'next/navigation';

import Sidebar from '@/src/components/ui/sidebar/Sidebar';
import Title from '@/src/components/ui/title/Title';
import { PAGES } from '@/src/config/pages.config';
import { getServerAuth } from '@/src/utils/supabase/getServerAuth';

export default async function Publiclayout({ children }: { children: React.ReactNode }) {
	const user = await getServerAuth();
	if (!user) {
		redirect(PAGES.LOGIN);
	}
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
