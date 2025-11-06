import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

type TModalType = 'createHabit' | null;
type ModalState = {
	type: TModalType;
	payload?: unknown;
};

const initialState: ModalState = { type: null, payload: undefined };

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		open(state, action: PayloadAction<{ type: Exclude<TModalType, null>; payload?: unknown }>) {
			state.type = action.payload.type;
			state.payload = action.payload.payload;
		},
		close() {
			return initialState;
		},
	},
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
