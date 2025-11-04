'use client';

import { Provider } from 'react-redux';

import { store } from '../store/store';

import ModalProvider from './ModalProvider';

export default function RootProvider({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<ModalProvider />
			{children}
		</Provider>
	);
}
