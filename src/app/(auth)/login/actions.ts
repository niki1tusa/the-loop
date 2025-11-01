'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { PAGES } from '@/src/config/pages.config';
import { createServer } from '@/src/utils/supabase/server';

export async function login(formData: FormData) {
	const supabase = await createServer();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { data: signInData, error } = await supabase.auth.signInWithPassword(data);

	console.log('signInData:', signInData);
	console.log('signInError:', error);

	if (error || !signInData?.session) {
		redirect('/error');
	}

	revalidatePath(PAGES.DASHBOARD);
	redirect('/');
}
