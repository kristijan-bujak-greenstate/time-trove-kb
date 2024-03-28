export type TranslationLanguages = {
  [key: string]: {
    [key: string]: string;
  };
};
export const translations: TranslationLanguages = {
  en: {
    /* PUBLIC FORM */
    //base
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Password',

    //login
    loginTitle: 'Log in',
    loginDescription: 'Use your email to log in to your TimeTrove Dashboard.',
    loginButton: 'Log in',
    loginFooterDescription: 'Don’t have an account yet?',
    loginFooterButton: 'Sign up',

    //signup
    signupTitle: 'Sign up',
    signupDescription: 'Use your work email to log in to your team workspace.',
    signupButton: 'Sign up',
    signupFooterDescription: 'Already have an account?',
    signupFooterButton: 'Log in',

    // validation
    emailValidationMessage: 'Invalid email address',
    passwordValidationMessage: 'Password should be at least 5 characters long',

    /* TRANSLATION MISSING */
    translationMissing: 'Translation missing',
  },

  de: {
    /* PUBLIC FORM */
    //base
    emailLabel: 'E-Mail',
    emailPlaceholder: 'E-Mail',
    passwordLabel: 'Passwort',
    passwordPlaceholder: 'Passwort',

    //login
    loginTitle: 'Anmelden',
    loginDescription: 'Verwenden Sie Ihre E-Mail-Adresse, um sich bei Ihrem TimeTrove-Dashboard anzumelden.',
    loginButton: 'Anmelden',
    loginFooterDescription: 'Sie haben noch kein Konto?',
    loginFooterButton: 'Registrieren',

    // signup
    signupTitle: 'Registrieren',
    signupDescription: 'Verwenden Sie Ihre Arbeits-E-Mail-Adresse, um sich in Ihrem Team-Arbeitsbereich anzumelden.',
    signupButton: 'Registrieren',
    signupFooterDescription: 'Haben Sie bereits ein Konto?',
    signupFooterButton: 'Einloggen',

    // validation
    emailValidationMessage: 'Ungültige E-Mail-Adresse',
    passwordValidationMessage: 'Das Passwort sollte mindestens 5 Zeichen lang sein',

    /* TRANSLATION MISSING */
    translationMissing: 'Übersetzung fehlt',
  },
};
