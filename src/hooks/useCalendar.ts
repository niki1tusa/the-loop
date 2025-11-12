import { addDays, startOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useState } from 'react';

import { useGetAllHabitsHistoryQuery } from '../services/habit-history/habit-history-api';
import { useGetHabitsQuery } from '../services/habit/habit-api';

export function useCalendar() {
	const { data: habits, isLoading: isLoadingHabit } = useGetHabitsQuery();
	const { data: habitHistory, isLoading: isLoadingHistory } = useGetAllHabitsHistoryQuery();
	const isLoading = isLoadingHabit || isLoadingHistory;

	const weekStart = startOfWeek(new Date(), { weekStartsOn: 1, locale: ru });
	const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
	const [dateCalendar, setDateCalendar] = useState(days);

	return { habits, habitHistory, isLoading, dateCalendar, setDateCalendar };
}
