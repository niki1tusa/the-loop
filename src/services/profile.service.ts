import { createServer } from '../utils/supabase/server';

export async function getProfileById() {
	const supabase = await createServer();
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();
	if (!user || error) {
		throw new Error('User not found!');
	}
	const {
		data: { profile },
		error: profileErr,
	} = await supabase.from('profiles').select('*').eq('id', user.id).single();
	if (!profile || profileErr) throw new Error('Profile not found!');
	return profile;
}
