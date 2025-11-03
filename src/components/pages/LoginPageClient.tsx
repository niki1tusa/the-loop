import { login } from '../../app/(auth)/login/actions';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';

export default function LoginPageClient() {
	return (
		<form>
			<label htmlFor='email'>Email:</label>
			<Input name='email' type='email' required />

			<label htmlFor='password'>Password:</label>
			<Input type='password' name='password' required />
			<Button type='submit' onClick={login}>
				Log in
			</Button>
		</form>
	);
}
