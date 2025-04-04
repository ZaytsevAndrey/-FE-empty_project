export interface LoginFormData {
    username: string;
    password: string;
}

export interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
    isSubmitting: boolean;
    error?: string;
    requestStatus: string;
}
