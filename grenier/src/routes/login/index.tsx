import { component$ } from "@builder.io/qwik";
import { LoginForm } from "./login-form";
import { DocumentHead } from "@builder.io/qwik-city";

const baseUrl = import.meta.env.PUBLIC_SITE_URL || 'http://localhost:5173';

const Login = component$(() => {
  return (
    <>
      <div class="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
        <div class="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div class="flex flex-col h-[calc(60vh-4rem)] lg:flex-row">
            {/* Section gauche - Formulaire */}
            <div class="lg:w-1/2 p-8 lg:p-12">
              {/* Logo */}
              <div class="mb-8">
                <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Bonjour,
                </h1>
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Content de vous revoir.
                </h2>
                <p class="text-gray-600">
                  Hey, bienvenue à votre vraie place.
                </p>
              </div>
              <LoginForm />
                             
               {/* Lien d'inscription */}
            <p class="mt-8 text-center text-gray-600">
              Vous n'avez pas de compte?{' '}
              <a
                href="/register"
                class="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
              >
                inscrivez-vous
              </a>
            </p>
          </div>

          {/* Section droite - Image */}
          <div class="lg:w-1/2 relative">
            <img
              src="/volunteers-helping-elderly-1024.webp"
              srcset="
                /volunteers-helping-elderly-480.webp 480w,
                /volunteers-helping-elderly-768.webp 768w,
                /volunteers-helping-elderly-1024.webp 1024w,
                /volunteers-helping-elderly-1600.webp 1600w
              "
              sizes="(max-width: 600px) 480px,
                    (max-width: 900px) 768px,
                    (max-width: 1200px) 1024px,
                    1600px"
              alt="Des volontaires aidant des personnes âgées"
              class="w-full h-64 lg:h-full object-cover"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
});

export default Login;

export const head: DocumentHead = {
  title: 'Connexion | Votre Application',
  meta: [
    {
      name: 'description',
      content: 'Connectez-vous à votre compte pour accéder à votre espace personnel.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: `${baseUrl}/login`,
    },
  ],
};
