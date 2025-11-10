import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { PAGES } from './config/pages-config';

export async function proxy(request: NextRequest) {
	const { pathname, searchParams } = request.nextUrl;

	const response = NextResponse.next();
	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
		{
			cookies: {
				getAll: () => request.cookies.getAll(),
				setAll: all =>
					all.forEach(({ name, value, options }) => response.cookies.set(name, value, options)),
			},
		}
	);

	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!user) {
		const url = request.nextUrl.clone();
		url.pathname = PAGES.LOGIN;

		const queryString = searchParams.size ? `?${searchParams}` : '';
		url.search = '';
		url.searchParams.set('redirectTo', pathname + queryString);
		console.log(url);
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/my-habit/:path*'],
};
