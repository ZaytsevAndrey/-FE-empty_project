export type ForgotPasswordFormProps = {
    onSubmit: (data: ForgotPasswordFormData) => void;
    requestStatus: string;
};

export type ForgotPasswordFormData = {
    email: string;
};
