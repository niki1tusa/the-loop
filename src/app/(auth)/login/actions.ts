'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { PAGES } from '@/src/config/pages-config';
import type { LoginFormDataTypes } from '@/src/shared/types/schemes/login-scheme-types';
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
