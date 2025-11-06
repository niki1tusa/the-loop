'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { login } from '../../../app/(auth)/login/actions';
import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';
import Title from '../../ui/title/Title';

import { LoginFormDataTypes, zodSchemeLoginForm } from './login-types';

export default function LoginPageClient() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginFormDataTypes>({ resolver: zodResolver(zodSchemeLoginForm) });
	const onSubmit = handleSubmit(async data => {
		try {
			login(data);
			toast.success('You was successfully authorized!');
			reset();
			close();
		} catch (error) {
			console.error('er:', error);
		}
	});
	return (
		<div className='flex h-screen flex-col items-center justify-center gap-10'>
			<Title textSize='xl'>Login Page</Title>

			<form onSubmit={onSubmit} className='flex flex-col items-center justify-center gap-3'>
				<Input
					register={register}
					errors={errors}
					name='email'
					type='email'
					label='Email:'
					placeholder='Enter mail...'
					required
				/>
				<Input
					register={register}
					errors={errors}
					type='password'
					name='password'
					label='Password:'
					placeholder='Enter password...'
					required
				/>
				<Button type='submit'>Log in</Button>
			</form>
		</div>
	);
}
