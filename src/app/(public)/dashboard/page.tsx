import { Metadata } from 'next';

import DashboardPageClient from '@/src/components/pages/DashboardPageClient';

export const metadata: Metadata = {
	title: 'Dashboard',
};
export default function DashboardPage() {
	return <DashboardPageClient />;
}
