import 'server-only'
import { z } from 'zod';

export const zodSchemeLoginForm = z.object({
	email: z.email(),
	password: z.string(),
});
export type LoginFormDataTypes = z.infer<typeof zodSchemeLoginForm>;
