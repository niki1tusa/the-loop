import { create } from 'zustand';

import { THabit } from '@/src/shared/types/habit-types';

export type ActiveHabitStore = {
	activeHabit: THabit | null;
	setActive: (habit: THabit) => void;
	dropActive: () => void;
};
export const useActiveHabit = create<ActiveHabitStore>(set => ({
	activeHabit: null,
	setActive: arg => set(() => ({ activeHabit: arg })),
	dropActive: () => set(() => ({ activeHabit: null })),
}));
