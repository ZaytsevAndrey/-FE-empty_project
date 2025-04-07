import { z } from 'zod';

const schema = z.object({
    code: z
        .string()
        .min(6, 'Код має містити щонайменше 6 символів')
        .max(6, 'Код має містити не більше 6 символів'),
});

export default schema;
