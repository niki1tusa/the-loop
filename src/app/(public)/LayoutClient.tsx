'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import Title from '@/src/components/ui/Title';
import Navigation from '@/src/components/ui/navigation/Navigation';

export default function LayoutClient({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const formateTitle = (pathname.slice(1, 2).toUpperCase() + pathname.slice(2)).replace('-', ' ');
	return (
		<div className='grid h-screen grid-cols-[20%_80%] gap-5'>
			<Navigation />
			<div className='mt-5 flex flex-col gap-2'>
				<Title textSize='xl'>{formateTitle}</Title>
				{children}
			</div>
		</div>
	);
}
