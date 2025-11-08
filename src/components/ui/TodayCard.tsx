'use client';

import { useDispatch } from 'react-redux';

import Button from './Button';
import ListHabit from './ListHabit';
import Title from './Title';
import { open } from '@/src/store/modal-slice';

export default function TodayCard() {
	const dispatch = useDispatch();
	return (
		<div className='flex w-[300px] flex-col gap-3'>
			<Title textSize='lg'>Today</Title>
			<ListHabit />
			<Button onClick={() => dispatch(open({ type: 'createHabit' }))}>Add habit</Button>
		</div>
	);
}
