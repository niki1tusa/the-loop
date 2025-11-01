import type { Metadata } from 'next';

import LoginPageClient from '../../../components/pages/LoginPageClient';

export const metadata: Metadata = {
	title: 'Login',
};

export default function LoginPage() {
	return <LoginPageClient />;
}
