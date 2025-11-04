import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';

import RootProvider from '../providers/Provider';

import './globals.css';

const interSans = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const rubikSans = Rubik({
	variable: '--font-rubik',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'The Loop',
	description: 'app for tracker habit',
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
