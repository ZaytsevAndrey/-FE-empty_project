// src/modules/auth/components/ResetPasswordForm/types.ts

import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface ResetPasswordFormData {
    code: string,
    password: string;
    confirmPassword: string;
}

export interface ResetPasswordFormProps {
    onSubmit: (data: ResetPasswordFormData) => void;
    register: UseFormRegister<ResetPasswordFormData>;
    errors: FieldErrors<ResetPasswordFormData>;
    requestStatus: string;
    backendError?: string | null;
}
