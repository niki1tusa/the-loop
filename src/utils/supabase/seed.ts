import { createAdminClient } from './admin';

export default async function seeder() {
	const supabase = createAdminClient();
	// создаем пользователя
	const { data: user, error } = await supabase.auth.admin.createUser({
		email: 'niki2ta00n4@gmail.com',
		password: '123456',
		email_confirm: true,
	});
	if (error) {
		console.error('❌ Ошибка создания пользователя:', error);
		return;
	}
	console.log('✅ Пользователь создан:', user.user?.id);
}
