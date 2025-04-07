export interface ResetPasswordFormProps {
    onSubmit: (data: ResetPasswordFormData) => void;
    requestStatus: string;
}

export interface ResetPasswordFormData {
    code: string;
    password: string;
    confirmPassword: string;
}
