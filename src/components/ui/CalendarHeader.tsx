'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import Button from './Button';
import { CALENDAR_OPTION } from '@/src/constants/calendar-constants';
import { CalendarOption } from '@/src/shared/types/calendar-types';

export default function CalendarHeader({
	days,
	handleScrollCalendar,
}: {
	days: Date[];
	handleScrollCalendar: (arg: 'left' | 'right') => void;
}) {
	const [calendarOption, setcalendarOption] = useState<CalendarOption>('Weeks');
	return (
		<div>
			<div className='flex gap-3 rounded-3xl bg-neutral-300 px-3 py-2'>
				{CALENDAR_OPTION.map(item => (
					<Button
						onClick={() => setcalendarOption(item)}
						className='rounded-3xl font-semibold'
						variant={item === calendarOption ? 'btn-primary' : 'btn-base'}
						key={item}
					>
						{item}
					</Button>
				))}
			</div>
			<div className='flex gap-3 px-3 pt-1.5'>
				<div className='rounded bg-gray-100 p-1 text-sm shadow shadow-neutral-400'>
					{days[0].toISOString().split('T')[0].replace(/-/g, '.')} -{' '}
					{days[6].toISOString().split('T')[0].replace(/-/g, '.')}
				</div>
				<div className='flex gap-1'>
					<button className='rounded p-1 shadow shadow-neutral-400'>
						<ChevronLeft
							size={20}
							onClick={() => {
								handleScrollCalendar('left');
							}}
						/>
					</button>
					<button className='rounded p-1 shadow shadow-neutral-400'>
						<ChevronRight
							size={20}
							onClick={() => {
								handleScrollCalendar('right');
							}}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
