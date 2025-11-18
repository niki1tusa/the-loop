import { create } from 'zustand';

import { THabit } from '@/src/shared/types/habit-types';

type Payload = THabit | null;

type ActiveHabitStore = {
	activeHabit: Payload;
	setActive: (habit: Payload) => void;
};

export const useActiveHabit = create<ActiveHabitStore>(set => ({
	activeHabit: null,
	setActive: arg => set(() => ({ activeHabit: arg })),
}));
