export interface EmailVerificationFormProps {
    onSubmit: (data: EmailVerificationFormData) => void;
    requestStatus: string;
}

export type EmailVerificationFormData = {
    code: string;
};
