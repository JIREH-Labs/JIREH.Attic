import { $, useSignal, useStore } from "@builder.io/qwik";

export const useLoginHandlers = () => {

    const showPassword = useSignal(false);
    const isLoading = useSignal(false);

    const errorStore = useStore({
        email: "",
        password: "",
    });

    const togglePasswordVisibility = $(() => {
        showPassword.value = !showPassword.value;
    });

    const handleEmailBlur = $((event: Event) => {
        const email = (event.target as HTMLInputElement).value;
        errorStore.email = email.includes("@") ? "" : "Veuillez entrer une adresse e-mail valide";
    });

    const handlePasswordInput = $((event: Event) => {
        const password = (event.target as HTMLInputElement).value;
        errorStore.password = password.length >= 8 ? "" : "Le mot de passe doit contenir au moins 8 caractères";
    });

    return {
        showPassword,
        isLoading,
        errorStore,
        togglePasswordVisibility,
        handleEmailBlur,
        handlePasswordInput,
    };
}; 
