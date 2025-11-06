import { THabit, THabitInsert } from '../../types/habit-types';
import { createClient } from '../../utils/supabase/client';

// get
export async function getProfileHabits() {
	const supabase = createClient();
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();
	if (!user || error) {
		throw new Error('User not found!');
	}
	const { data: habits, error: errorHabit } = await supabase
		.from('habits')
		.select('*')
		.eq('profile_id', user.id)
		.order('created_at', { ascending: true });
	if (errorHabit) {
		throw new Error(errorHabit.message);
	}
	return habits ?? [];
}
// create
export async function createHabit(fields: Omit<THabitInsert, 'profile_id'>) {
	const supabase = createClient();
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();
	if (!user || error) {
		throw new Error('User not found!');
	}
	const { data: habit, error: errorHabit } = await supabase
		.from('habits')
		.insert({ ...fields, profile_id: user.id })
		.select('*')
		.single<THabit>();
	if (errorHabit) {
		throw new Error(errorHabit.message);
	}
	return habit;
}

export async function updateQuantityCompletedHabit(idHabit: string) {
	const supabase = createClient();

	const { data: updateHabit, error: errorUpdateHabit } = await supabase
		.from('habits')
		.update({ is_completed: true })
		.eq('id', idHabit)
		.select('*')
		.single<THabit>();
	if (errorUpdateHabit) {
		throw new Error(errorUpdateHabit.message);
	}
	return updateHabit;
}
