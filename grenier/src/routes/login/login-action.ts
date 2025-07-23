import { routeAction$, zod$ } from "@builder.io/qwik-city";
import { loginSchema } from "./login-schema";

export const useLoginAction = routeAction$(async (values, event) => {
    const result = loginSchema.safeParse(values);

    if (!result.success) {
        return {
            status: 400,
            fieldErrors: result.error.flatten().fieldErrors,
        };
    }

    const { email, password, rememberMe } = result.data;

  if (email === 'test@example.com' && password === 'password123') {
    if (rememberMe) {
      event.cookie.set('remember', 'true', {
        maxAge: 30 * 24 * 60 * 60,
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
    }
    throw event.redirect(302, '/homepage');
  }

  return {
    success: false,
    formError: 'Email ou mot de passe incorrect',
  };
}, zod$(loginSchema));