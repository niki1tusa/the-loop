import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';

import { SITE_NAME } from '../constants/seo-constants';
import RootProvider from '../providers/Provider';

import '../shared/styles/globals.css';

const interSans = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const rubikSans = Rubik({
	variable: '--font-rubik',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `${SITE_NAME} | %s`,
	},
	description: 'app for tracker habit',
	icons: {
		icon: '/favicon/favicon.svg',
		shortcut: '/favicon/favicon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${interSans.variable} ${rubikSans.variable} antialiased`}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
