import { Database } from './db-types';

export type THabit = Database['public']['Tables']['habits']['Row'];
export type THabitInsert = Database['public']['Tables']['habits']['Insert'];
export type THabitUpdate = Database['public']['Tables']['habits']['Update'];
