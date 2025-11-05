import { useDispatch, useSelector } from 'react-redux';

import { CreateHabitModal } from '../components/ui/modal/CreateHabitModal';
import { close } from '../store/modal.slice';
import { RootState } from '../store/store';

export default function ModalProvider() {
	const dispatch = useDispatch();
	const { type } = useSelector((s: RootState) => s.modalSlice);

	const handleClose = () => dispatch(close());

	if (!type) return null;
	switch (type) {
		case 'createHabit':
			return <CreateHabitModal close={handleClose} />;
		default:
			return null;
	}
}
