import { Database } from './db-types';

export type THabitHistory = Database['public']['Tables']['habit_history']['Row'];
export type THabitHistoryInsert = Database['public']['Tables']['habit_history']['Insert'];
export type THabitHistoryUpdate = Database['public']['Tables']['habit_history']['Update'];
