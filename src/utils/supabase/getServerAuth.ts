import { createServer } from './server';

export async function getServerAuth() {
	const supabase = await createServer();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return user ?? null;
}
