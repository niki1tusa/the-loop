'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { TFormData, zodSchemeCreateHabit } from '../../../shared/types/schemes/habit-scheme-types';
import Button from '../Button';
import Input from '../Input';

import Modal from './Modal';
import { useCreateHabitMutation } from '@/src/services/habit/habit-api';
import { ICONS } from '@/src/shared/types/icons-types';

type Props = {
	close: () => void;
};

export const CreateHabitModal = ({ close }: Props) => {
	const [createHabit] = useCreateHabitMutation();
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
			toast.success('The habit was successfully created!');
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
				<div className='flex gap-2'>
					{Object.entries(ICONS).map(item => {
						const Icon = item[1];
						return (
							<button
								type='button'
								key={item[0]}
								className='focus:border-primary rounded p-2 shadow shadow-neutral-400 transition-all hover:bg-gray-100'
							>
								<Icon />
							</button>
						);
					})}
				</div>

				<div className='flex gap-1.5'>
					<Button type='submit'>Create</Button>
					<Button onClick={close}>Close</Button>
				</div>
			</form>
		</Modal>
	);
};
