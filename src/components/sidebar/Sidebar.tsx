'use client';

import clsx from 'clsx';
import { PanelRightOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { navVariants, textNavVariants } from './animate';
import { NAV_DATA } from './sidebar.data';

export default function Sidebar() {
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
				type='button'
				onClick={() => setIsShow(!isShow)}
				className='absolute top-8 right-2 z-20'
			>
				<PanelRightOpen />
			</motion.button>
			<motion.div variants={textNavVariants} className='text-4xl'>
				Hello, <br />
				<b>Nikita</b>
			</motion.div>
			<ul className='flex flex-col gap-4'>
				{NAV_DATA.map(item => {
					const Icon = item.icon;
					return (
						<motion.li
							variants={textNavVariants}
							className={clsx('flex items-center gap-1.5 px-2 py-1.5 text-xl hover:text-foreground/50')}
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
