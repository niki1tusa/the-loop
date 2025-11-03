import { login } from '../../app/(auth)/login/actions';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';
import Title from '../ui/title/Title';

export default function LoginPageClient() {
	return (
		<div className='flex h-screen flex-col items-center justify-center gap-10'>
			<Title textSize='xl'>Login Page</Title>
			<form className='flex flex-col items-center justify-center gap-3'>
				<Input name='email' type='email' label='Email:' placeholder='Enter mail...' required />
				<Input
					type='password'
					name='password'
					label='Password:'
					placeholder='Enter password...'
					required
				/>
				<Button type='submit' action={login}>
					Log in
				</Button>
			</form>
		</div>
	);
}
