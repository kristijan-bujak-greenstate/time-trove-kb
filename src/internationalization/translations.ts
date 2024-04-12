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

    // login toast
    loginToastTitle: 'Error!',
    loginToastDescription: 'Something went wrong! Please try again',

    //signup
    signupTitle: 'Sign up',
    signupDescription: 'Use your work email to log in to your team workspace.',
    signupButton: 'Sign up',
    signupFooterDescription: 'Already have an account?',
    signupFooterButton: 'Log in',

    // signup toast success
    signupToastTitleSuccess: 'Success!',
    signupToastDescriptionSuccess: 'Succesfully registered! You can now log in!',

    // signup toast error
    signupToastTitleError: 'Error!',
    signupToastDescriptionError: 'Failed to register! Something went wrong!',

    // validation
    emailValidationMessage: 'Invalid email address',
    passwordValidationMessage: 'Password should be at least 5 characters long',

    /* NAVIGATION */
    navigationTitle: 'Dashboard',
    navigationButtonText: 'Create task',

    /* MAINTENANCE */
    maintenanceTitle: "We'll be right back!",
    maintenanceDescription: 'This service is temporarily down for a bit of maintenance.',

    /* TRANSLATION MISSING */
    translationMissing: 'Translation missing',

    /* SOMETHING WENT WRONG */
    backendErrorTitle: 'Something went wrong',
    backendErrorDescription: 'Ann error occured while attempting to retrieve data from the server',
    backendErrorButtonText: 'Try again',

    /* NOTHING HERE YET */
    emptyTasksTitle: 'Nothing here yet!',
    emptyTasksDescription: 'There are no tasks created',
    emptyTasksButtonText: 'Create task',

    /* NOT FOUND 404 PAGE */
    notFoundPageTitle: 'Page not found',
    notFoundPageDescription:
      'We apologize for the inconvenience, but it appears that the page you are attempting to access is currently unavailable. This might be due to a temporary technical issue or an outdated link.',
    notFoundPageButtonText: 'Back home',
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

    // login toast
    loginToastTitle: 'Fehler!',
    loginToastDescription: 'Etwas ist schief gelaufen! Bitte versuchen Sie es erneut',

    // signup
    signupTitle: 'Registrieren',
    signupDescription: 'Verwenden Sie Ihre Arbeits-E-Mail-Adresse, um sich in Ihrem Team-Arbeitsbereich anzumelden.',
    signupButton: 'Registrieren',
    signupFooterDescription: 'Haben Sie bereits ein Konto?',
    signupFooterButton: 'Einloggen',

    // signup toast success
    signupToastTitleSuccess: 'Erfolg!',
    signupToastDescriptionSuccess: 'Erfolgreich registriert! Sie können sich jetzt anmelden!',

    // signup toast error
    signupToastTitleError: 'Fehler!',
    signupToastDescriptionError: 'Registrierung fehlgeschlagen! Etwas ist schief gelaufen!',

    // validation
    emailValidationMessage: 'Ungültige E-Mail-Adresse',
    passwordValidationMessage: 'Das Passwort sollte mindestens 5 Zeichen lang sein',

    /* NAVIGATION */
    navigationTitle: 'Dashboard',
    navigationButtonText: 'Aufgabe erstellen',

    /* MAINTENANCE */
    maintenanceTitle: 'Wir sind gleich zurück!',
    maintenanceDescription: 'Dieser Dienst ist vorübergehend für Wartungsarbeiten nicht verfügbar.',

    /* TRANSLATION MISSING */
    translationMissing: 'Übersetzung fehlt',

    /* SOMETHING WENT WRONG */
    backendErrorTitle: 'Etwas ist schiefgegangen',
    backendErrorDescription: 'Ein Fehler ist aufgetreten, während versucht wurde, Daten vom Server abzurufen',
    backendErrorButtonText: 'Erneut versuchen',

    /* NOTHING HERE YET */
    emptyTasksTitle: 'Hier ist noch nichts!',
    emptyTasksDescription: 'Es wurden noch keine Aufgaben erstellt',
    emptyTasksButtonText: 'Aufgabe erstellen',

    /* NOT FOUND 404 PAGE */
    notFoundPageTitle: 'Seite nicht gefunden',
    notFoundPageDescription:
      'Wir entschuldigen uns für die Unannehmlichkeiten, aber es scheint, dass die von Ihnen gesuchte Seite derzeit nicht verfügbar ist. Dies könnte auf ein vorübergehendes technisches Problem oder einen veralteten Link zurückzuführen sein.',
    notFoundPageButtonText: 'Zurück zur Startseite',
  },
};
