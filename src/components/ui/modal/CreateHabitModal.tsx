'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '../button/Button';
import Input from '../input/Input';

import Modal from './Modal';
import { useCreateHabitMutation } from '@/src/services/habit/habit.api';

type Props = {
	close: () => void;
};
const zodSchemeCreateHabit = z.object({
	title: z.string().min(1, 'Title is required!'),
	quantity: z
		.string()
		.trim()
		.regex(/^\d+(?:[.,]\d+)?$/, 'Enter number!')
		.min(1, 'Quantity is required!'),
	quantity_description: z.string().min(1, 'Description is required!'),
});
type TFormData = z.infer<typeof zodSchemeCreateHabit>;
export const CreateHabitModal = ({ close }: Props) => {
	const [createHabit, { isError, isLoading, isSuccess }] = useCreateHabitMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TFormData>({ resolver: zodResolver(zodSchemeCreateHabit) });
	const onSubmit = handleSubmit(async data => {
		try {
			await createHabit(data).unwrap();
			reset();
			close();
		} catch (error) {
			console.error('er:', error);
		}
	});
	return (
		<Modal title='Create habit' close={close}>
			<form onSubmit={onSubmit} className='flex w-full flex-col justify-center gap-3'>
				<Input<TFormData>
					register={register}
					errors={errors}
					name='title'
					type='text'
					label='Title:'
					placeholder='Enter title...'
					required
				/>
				<Input<TFormData>
					register={register}
					errors={errors}
					type='text'
					name='quantity'
					label='Quantity:'
					placeholder='Enter Quantity...'
					required
				/>
				<Input<TFormData>
					register={register}
					errors={errors}
					type='text'
					name='quantity_description'
					label='Description:'
					placeholder='liters, pages, minutes'
					required
				/>
				<div className='flex gap-1.5'>
					<Button type='submit'>Create</Button>
					<Button onClick={close}>Close</Button>
				</div>
			</form>
		</Modal>
	);
};
