import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { CALENDAR_OPTION } from '@/src/constants/calendar-constants';

export default function CalendarHeader({
	days,
	handleScrollCalendar,
}: {
	days: Date[];
	handleScrollCalendar: (arg: 'left' | 'right') => void;
}) {
	return (
		<div>
			<div className='flex justify-around rounded-3xl bg-neutral-300 px-3 py-2'>
				{CALENDAR_OPTION.map(item => (
					<div className={clsx('font-semibold', item === 'Weeks' ? 'text-primary' : '')} key={item}>
						{item}
					</div>
				))}
			</div>
			<div className='flex justify-between px-3 pt-1.5'>
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
