import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { createServer } from './utils/supabase/server';

export async function proxy(request: NextRequest) {
	const supabase = await createServer();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (
		!user &&
		!request.nextUrl.pathname.startsWith('/login') &&
		!request.nextUrl.pathname.startsWith('/auth')
	) {
		const url = request.nextUrl.clone();
		url.pathname = '/login';
		return NextResponse.redirect(url);
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/auth/:path*', '/dashboard/:path*'],
};
