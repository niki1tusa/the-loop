'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { LoginFormDataTypes } from '@/src/components/pages/login/login-types';
import { PAGES } from '@/src/config/pages-config';
import { createServer } from '@/src/utils/supabase/server';

export async function login(formData: LoginFormDataTypes) {
	const supabase = await createServer();

	const { data: signInData, error } = await supabase.auth.signInWithPassword(formData);

	console.log('signInData:', signInData);
	console.log('signInError:', error);

	if (error || !signInData?.session) {
		redirect('/error');
	}

	revalidatePath(PAGES.DASHBOARD);
	redirect(PAGES.DASHBOARD);
}
