import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import LoginPageClient from '../../../components/pages/LoginPageClient';

import { PAGES } from '@/src/config/pages-config';
import { getServerAuth } from '@/src/utils/supabase/getServerAuth';

export const metadata: Metadata = {
	title: 'Login',
};

export default async function LoginPage() {
	const user = await getServerAuth();
	if (user) {
		redirect(PAGES.DASHBOARD);
	}
	return <LoginPageClient />;
}
