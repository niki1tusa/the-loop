import { TProfile } from '../../shared/types/profile-types';
import { createClient } from '../../utils/supabase/client';

export async function getProfileById() {
	const supabase = createClient();
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();
	if (!user || error) {
		throw new Error('User not found!');
	}
	const { data: profile, error: profileErr } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', user.id)
		.single<TProfile>();
	if (!profile || profileErr) throw new Error('Profile not found!');
	return profile;
}
