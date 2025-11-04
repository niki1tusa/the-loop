'use client';

import Button from '../button/Button';
import Input from '../input/Input';

import Modal from './Modal';

interface Props {
	close: () => void;
}
export const CreateHabitModal = ({ close }: Props) => {
	return (
		<Modal title='Create Habit' close={close}>
			<form className='flex flex-col items-center justify-center gap-3'>
				<Input name='title' type='text' label='Title:' placeholder='Enter title...' required />
				<Input
					type='number'
					name='quantity'
					label='Quantity:'
					placeholder='Enter Quantity...'
					required
				/>
				<Input
					type='number'
					name='quantityDescription'
					label='Description:'
					placeholder='liters, pages, minutes'
					required
				/>
				<div className='flex gap-1'>
					<Button type='submit'>Create</Button>
					<Button onClick={close}>Close</Button>
				</div>
			</form>
		</Modal>
	);
};
