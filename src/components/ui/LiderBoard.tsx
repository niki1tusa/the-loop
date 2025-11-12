'use client';

import clsx from 'clsx';

import Skeleton from './Skeleton';
import Title from './Title';
import { useGetMockUsersQuery } from '@/src/services/user-mock/user-mock-api';

export default function LiderBoard() {
	const { data: users, isLoading } = useGetMockUsersQuery();
	return (
		<div className='flex flex-col gap-3'>
			<Title textSize='lg'>Leaderboard</Title>
			<ul className='navigation-list from-card to-secondary/20 flex flex-col gap-2 rounded-3xl bg-linear-to-t px-4 py-2 shadow shadow-neutral-400'>
				{isLoading ? (
					<Skeleton />
				) : (
					users?.map((user, i) => (
						<li
							key={user.id}
							className={clsx(
								'border-muted/50 flex w-full items-center gap-2 py-1',
								i !== 0 ? 'border-t' : ''
							)}
						>
							<div
								className={clsx(
									'flex h-7 w-7 items-center justify-center rounded-full shadow shadow-neutral-400',
									i === 0
										? 'text-primary-foreground bg-amber-300'
										: i === 1
											? 'text-primary-foreground bg-gray-400'
											: i === 2
												? 'text-primary-foreground bg-amber-950'
												: 'text-black'
								)}
							>
								{i + 1}
							</div>
							<div>{user.name}</div>
						</li>
					))
				)}
			</ul>
			<i className='text-muted text-sm'>
				Based on following all the habits in a days <br /> If you try hard, you will be included in
				this list.
			</i>
		</div>
	);
}
