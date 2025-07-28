import { component$ } from "@builder.io/qwik";
import { DocumentHead, Form } from "@builder.io/qwik-city";
import { useLoginAction } from "./login-action";
import { useLoginHandlers } from "./login-handler";
import { EyeIcon, EyeOffIcon, LoadingSpinner } from "./login.icons";

export const LoginForm = component$(() => {
    const loginAction = useLoginAction();

    const { showPassword, isLoading, errorStore, togglePasswordVisibility, handleEmailBlur, handlePasswordInput } = useLoginHandlers();

    return (
      <>
            {/* Formulaire de connexion */}
            <Form action={loginAction} class="space-y-6">
                {loginAction.value?.formError && (
                    <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        {loginAction.value.formError}
                    </div>
                )}

                <div>
                    <label for="email" class="sr-only">Adresse email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="K.stanley@gmail.com"
                        class="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-lg"
                        onBlur$={handleEmailBlur}
                        required
                    />

                    {errorStore.email || loginAction.value?.fieldErrors?.email && (
                        <p class ="mt-2 text-sm text-red-600">{errorStore.email || loginAction.value.fieldErrors.email}
                            {errorStore.email || loginAction.value?.fieldErrors?.email?.[0]}
                        </p>
                    )}
                </div>

                <div class="relative">
                    <label for="password" class= "sr-only">Mot de passe</label>
                    <input
                        type={showPassword.value ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        class="w-full px-4 py-4 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-lg"
                        onInput$={handlePasswordInput}
                        required
                    />

                    <button
                        type="button"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none p-2"
                        onClick$={togglePasswordVisibility}
                        title={showPassword.value ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    >
                        {showPassword.value ? <EyeOffIcon /> : <EyeIcon />}
                    </button>

                    {errorStore.password || loginAction.value?.fieldErrors?.password && (
                        <p class="mt-2 text-sm text-red-600">
                            {errorStore.password || loginAction.value.fieldErrors.password}
                            {errorStore.password || loginAction.value?.fieldErrors?.password?.[0]}
                        </p>
                    )}
                </div>

                <div class="flex items-center justify-between">
                    <label class="flex items-center">
                        <input 
                            type="checkbox"
                            name="Se souvenir de moi"
                            class ="w-5 h-5 accent-purple-500 border-gray-300 rounded focus:ring-2 focus:ring-purple-900" 
                        />
                        <span class="ml-2 text-sm text-gray-700">Se souvenir de moi</span>
                    </label>

                    <a 
                        href="/forgot-password" 
                        class="text-sm text-purple-600 hover:text-purple-800 transition-colors duration-200"
                        >
                        Mot de passe oublié ?
                    </a>
                </div>

                <button
                    type="submit"
                    class ="w-full px-6 py-4 bg-purple-600 text-white rounded-xl font-semibold text-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled={isLoading.value}"
                    title="Se connecter"
                    >
                    {isLoading.value ? (
                        <div class="flex items-center justify-center">
                            <LoadingSpinner />
                            <span class="ml-2">Connexion...</span>
                        </div>
                    ): (
                        'Se connecter'
                    )}
                </button>
            </Form>

        </>
    );
});
