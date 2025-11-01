import { login } from '../../app/(auth)/login/actions';

export default function LoginPageClient() {
	return (
		<form>
			<label htmlFor='email'>Email:</label>
			<input id='email' name='email' type='email' required />

			<label htmlFor='password'>Password:</label>
			<input id='password' name='password' type='password' required />

			<button formAction={login}>Log in</button>
		</form>
	);
}
