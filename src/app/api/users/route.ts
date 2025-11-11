import { UserMock } from '@/src/shared/types/user-mock-types';

export async function GET() {
	const data = await fetch('https://jsonplaceholder.typicode.com/users', {
		next: { revalidate: 120 },
	});
	const users: UserMock[] = await data.json();
	return Response.json(users);
}
