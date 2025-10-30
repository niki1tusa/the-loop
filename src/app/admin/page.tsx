import type { Metadata } from 'next';

import seeder from '@/src/utils/supabase/seed';

export const metadata: Metadata = {
	title: 'Admin',
};

export default async function Page() {
	return (
		<div>
			<button onClick={() => seeder()} className='bg-secondary border p-5 text-center text-2xl'>
				seed
			</button>
		</div>
	);
}
