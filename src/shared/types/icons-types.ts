import {
	BookOpenText,
	CigaretteOff,
	ClipboardList,
	Dumbbell,
	GlassWater,
	LucideIcon,
} from 'lucide-react';

export enum IconName {
	GlassWater = 'GlassWater',
	CigaretteOff = 'CigaretteOff',
	Dumbbell = 'Dumbbell',
	BookOpenText = 'BookOpenText',
	Another = 'Another',
}

export const ICONS: Record<IconName, LucideIcon> = {
	[IconName.GlassWater]: GlassWater,
	[IconName.CigaretteOff]: CigaretteOff,
	[IconName.Dumbbell]: Dumbbell,
	[IconName.BookOpenText]: BookOpenText,
	[IconName.Another]: ClipboardList,
};
