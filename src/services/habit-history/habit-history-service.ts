import { createClient } from '../../utils/supabase/client';

// TODO: создается каждый день новая, а метка о выполннеии ставиться в today
// create
export async function createHabitHistory(idHabit: string) {
	const supabase = createClient();
	const { data: habitHistory, error } = await supabase
		.from('habit_history')
		.insert({ habit_id: idHabit })
		.select('*')
		.single();
	if (error) {
		throw new Error(error.message);
	}
	return habitHistory;
}
// update
export async function completeHabitHistory(id: string) {
	const supabase = createClient();
	const { data: habitHistory, error } = await supabase
		.from('habit_history')
		.update({ is_completed: true })
		.eq('id', id)
		.select('*')
		.single();
	if (error) {
		throw new Error(error.message);
	}
	return habitHistory;
}
// get
export async function getHabitHistory(day: string) {
	const supabase = createClient();
	const { data: habitHistory, error } = await supabase
		.from('habit_history')
		.select('*')
		.eq('completed_date', day);
	if (error) {
		throw new Error(error.message);
	}
	return habitHistory;
}
