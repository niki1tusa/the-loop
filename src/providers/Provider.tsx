'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'sonner';

import { store } from '../store/store';

import ModalProvider from './ModalProvider';

export default function RootProvider({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<ModalProvider />
			<Toaster position='top-right' richColors />
			{children}
		</Provider>
	);
}
