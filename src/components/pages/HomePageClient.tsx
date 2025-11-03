'use client';

import { Brain, Dumbbell, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import Button from '../ui/button/Button';

import { PAGES } from '@/src/config/pages.config';

export default function HomePageClient() {
	return (
		<main className='text-foreground bg-background flex min-h-screen flex-col items-center'>
			{/* HERO */}
			<section className='flex max-w-2xl flex-col items-center py-24 text-center'>
				<h1 className='mb-4 text-5xl font-bold'>
					Build better habits, <br /> one day at a time.
				</h1>
				<p className='text-muted mb-8 text-lg'>
					Track your progress, stay consistent, and grow stronger every day.
				</p>
				<div className='flex gap-4'>
					<Link href={PAGES.LOGIN}>
						<Button>Get Started</Button>
					</Link>
					<button className='border-secondary text-secondary rounded-xl border px-6 py-3 font-medium'>
						See Demo
					</button>
				</div>
			</section>

			{/* FEATURES */}
			<section className='grid max-w-5xl grid-cols-1 gap-6 px-4 py-16 sm:grid-cols-3'>
				{[
					{
						icon: Dumbbell,
						title: 'Track your progress',
						text: 'Visualize your daily consistency.',
					},
					{ icon: Brain, title: 'Stay mindful', text: 'Focus on small, repeatable actions.' },
					{ icon: Trophy, title: 'Achieve goals', text: 'Turn habits into achievements.' },
				].map(({ icon: Icon, title, text }) => (
					<motion.div
						key={title}
						whileHover={{ y: -4 }}
						className='bg-card flex flex-col items-center rounded-2xl p-6 text-center shadow shadow-neutral-400'
					>
						<Icon size={32} className='text-primary mb-3' />
						<h3 className='mb-2 text-xl font-semibold'>{title}</h3>
						<p className='text-muted'>{text}</p>
					</motion.div>
				))}
			</section>

			{/* CTA */}
			<section className='py-16 text-center'>
				<h2 className='mb-4 text-3xl font-semibold'>Start your journey today — it’s free.</h2>
				<Button>Get started</Button>
			</section>

			{/* FOOTER */}
			<footer className='text-muted py-8 text-sm'>© 2025 The Loop — Habit Tracker</footer>
		</main>
	);
}
