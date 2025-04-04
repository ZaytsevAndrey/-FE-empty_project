export interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegisterFormProps {
    onSubmit: (data: RegisterFormData) => void;
    requestStatus: string;
}
