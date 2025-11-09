import { redirect } from 'next/navigation';

import LayoutClient from './LayoutClient';
import { PAGES } from '@/src/config/pages-config';
import { getServerAuth } from '@/src/utils/supabase/getServerAuth';

export default async function Publiclayout({ children }: { children: React.ReactNode }) {
	const user = await getServerAuth();

	if (!user) {
		redirect(PAGES.LOGIN);
	}
	return <LayoutClient>{children}</LayoutClient>;
}
