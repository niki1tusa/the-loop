import { login } from '../../app/(auth)/login/actions';
import Button from '../ui/button/Button';

export default function LoginPageClient() {
	return (
		<form>
			<label htmlFor='email'>Email:</label>
			<input id='email' name='email' type='email' required />

			<label htmlFor='password'>Password:</label>
			<input id='password' name='password' type='password' required />
			<Button type='submit' onClick={login}>
				Log in
			</Button>
		</form>
	);
}
