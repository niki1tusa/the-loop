'use client';

import { useDispatch } from 'react-redux';

import Button from './Button';
import Title from './Title';
import TodayListHabit from './habit/TodayListHabit';
import { open } from '@/src/store/redux/modal-slice';

export default function Today() {
	const dispatch = useDispatch();
	return (
		<div className='flex h-[500px] w-[300px] flex-col gap-3'>
			<Title textSize='lg'>Today</Title>

			<div className='min-h-0 flex-1'>
				<TodayListHabit />
			</div>

			<Button onClick={() => dispatch(open({ type: 'createHabit' }))}>Add habit</Button>
		</div>
	);
}
