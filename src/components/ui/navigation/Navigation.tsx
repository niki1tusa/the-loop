'use client';

import clsx from 'clsx';
import { Moon, PanelRightOpen, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { borderVariants, navVariants, textNavVariants } from './animate';
import { NAVIGATION } from '@/src/config/navigation-config';
import { useGetProfileQuery } from '@/src/services/profile/profile-api';

export default function Navigation() {
	const { data: profile } = useGetProfileQuery();
	const [isShow, setIsShow] = useState<boolean>(true);
	const pathname = usePathname();
	return (
		<motion.nav
			variants={navVariants}
			initial='open'
			animate={isShow ? 'open' : 'closed'}
			className='bg-card font-rubik relative flex flex-col gap-5 overflow-hidden rounded-tr-3xl px-10 pt-5 shadow shadow-neutral-400'
		>
			<motion.button
				animate={{ rotate: isShow ? 0 : 180 }}
				whileTap={{ scale: 0.9 }}
				whileHover={{ scale: 1.02 }}
				transition={{ type: 'spring', stiffness: 250, damping: 20 }}
				type='button'
				onClick={() => setIsShow(!isShow)}
				className='absolute top-8 right-2 z-20'
			>
				<PanelRightOpen className='icon' />
			</motion.button>
			<motion.div variants={textNavVariants} className='relative text-4xl'>
				Hello, <br />
				<b>{profile?.name}</b>
				<motion.div
					variants={borderVariants}
					className='bg-muted my-5 h-[1.5px] w-full origin-left'
				/>
			</motion.div>
			<ul className='relative flex flex-col gap-4'>
				{NAVIGATION.map(item => {
					const Icon = item.icon;
					return (
						<Link href={item.link} key={item.id}>
							<motion.li
								variants={textNavVariants}
								className={clsx(
									'hover:text-foreground/50 flex items-center gap-1.5 px-2 py-1.5 text-sm 2xl:text-base',
									item.link === pathname && 'text-primary hover:text-primary/50'
								)}
							>
								<Icon className='icon' />
								{item.title}
							</motion.li>
						</Link>
					);
				})}
				<motion.div
					variants={borderVariants}
					className='bg-muted my-5 h-[1.5px] w-full origin-left'
				/>
			</ul>
			<ul className='flex flex-col gap-4'>
				{[
					{ id: 1, title: 'Light', icon: Sun },
					{ id: 2, title: 'Dark', icon: Moon },
				].map(item => {
					const Icon = item.icon;
					return (
						<motion.li
							variants={textNavVariants}
							className={clsx(
								'hover:text-foreground/50 flex items-center gap-1.5 px-2 py-1.5 text-sm 2xl:text-base',
								item.title === 'Dashboard' && 'text-primary hover:text-primary/50'
							)}
							key={item.id}
						>
							<Icon className='icon' />
							{item.title}
						</motion.li>
					);
				})}
			</ul>
		</motion.nav>
	);
}
