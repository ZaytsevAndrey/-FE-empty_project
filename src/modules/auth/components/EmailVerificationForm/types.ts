export interface EmailVerificationFormData {
    email: string;
}

export interface EmailVerificationFormProps {
    onSubmit: (data: EmailVerificationFormData) => void;
    requestStatus: string;
}
