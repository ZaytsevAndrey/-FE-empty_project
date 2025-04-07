export interface ResetPasswordFormData {
    code: string;
    newPassword: string;
    confirmPassword: string;
}

export interface ResetPasswordFormProps {
    onSubmit: (data: ResetPasswordFormData) => void;
    requestStatus: string;
}
