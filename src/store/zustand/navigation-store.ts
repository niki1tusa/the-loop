import { create } from 'zustand';

export type NavigationStoreTypes = {
	isShow: boolean;
	toggle: () => void;
};

export const useNavigationStore = create<NavigationStoreTypes>(set => ({
	isShow: true,
	toggle: () => set(state => ({ isShow: !state.isShow })),
}));
