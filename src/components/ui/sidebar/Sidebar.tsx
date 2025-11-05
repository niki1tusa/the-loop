'use client';

import clsx from 'clsx';
import { Moon, PanelRightOpen, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { borderVariants, navVariants, textNavVariants } from './animate';
import { NAV_DATA } from './sidebar.data';
import { useGetProfileQuery } from '@/src/services/profile/profile.api';

export default function Sidebar() {
	const { data: profile } = useGetProfileQuery();
	const [isShow, setIsShow] = useState<boolean>(true);
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
				<PanelRightOpen />
			</motion.button>
			<motion.div variants={textNavVariants} className='relative text-4xl'>
				Hello, <br />
				<b>{profile?.name}</b>
				<motion.div
					variants={borderVariants}
					className='bg-muted absoulte my-5 h-[1.5px] w-full origin-left'
				/>
			</motion.div>
			<ul className='relative flex flex-col gap-4'>
				{NAV_DATA.map(item => {
					const Icon = item.icon;
					return (
						<motion.li
							variants={textNavVariants}
							className={clsx(
								'hover:text-foreground/50 flex items-center gap-1.5 px-2 py-1.5 text-lg',
								item.title === 'Dashboard' && 'text-primary hover:text-primary/50'
							)}
							key={item.id}
						>
							<Icon size={28} />
							{item.title}
						</motion.li>
					);
				})}
				<motion.div
					variants={borderVariants}
					className='bg-muted absoulte my-5 h-[1.5px] w-full origin-left'
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
								'hover:text-foreground/50 flex items-center gap-1.5 px-2 py-1.5 text-lg',
								item.title === 'Dashboard' && 'text-primary hover:text-primary/50'
							)}
							key={item.id}
						>
							<Icon size={28} />
							{item.title}
						</motion.li>
					);
				})}
			</ul>
		</motion.nav>
	);
}
