import { createClient } from '../../utils/supabase/client';

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
	const {
		data: { user },
		error: errorUser,
	} = await supabase.auth.getUser();
	if (!user || errorUser) {
		throw new Error('User not found!');
	}
	const { data: habitHistory, error } = await supabase
		.from('habit_history')
		.select('*,    habits (profile_id)')
		.eq('completed_date', day)
		.eq('habits.profile_id', user.id);
	if (error) {
		throw new Error(error.message);
	}
	return habitHistory;
}
// getALL
export async function getALLHabitHistory() {
	const supabase = createClient();
	const {
		data: { user },
		error: errorUser,
	} = await supabase.auth.getUser();
	if (!user || errorUser) {
		throw new Error('User not found!');
	}
	const { data: habitHistory, error } = await supabase
		.from('habit_history')
		.select('*,    habits (profile_id)')
		.eq('habits.profile_id', user.id);

	if (error) {
		throw new Error(error.message);
	}
	return habitHistory;
}
