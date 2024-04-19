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

    //logout dialog
    logoutDialogTitle: 'Log out',
    logoutDialogDescription: 'Are you sure you want to log out?',
    logoutDialogPrimaryButton: 'Log out',
    logoutDialogSecondaryButton: 'Cancel',

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

    /* CREATE TASK */
    createTaskModalTitle: 'Create task',
    createTaskModalDescription: 'Please provide the required details to create the task',
    createTaskModalSubTitle: 'Task details',
    createTaskModalLabelInput: 'Task details',
    createTaskModalPlaceholderInput: 'Title',
    createTaskModalLabelTextarea: 'Description',
    createTaskModalPlaceholderTextarea: 'Description',
    createTaskOptionSelectTitle: 'Priority',
    createTaskButtonText: 'Create task',

    /* EDIT TASK */
    editTaskModalTitle: 'Edit task',
    editTaskModalSubTitle: 'Task details',
    editTaskModalLabelInput: 'Task details',
    editTaskModalPlaceholderInput: 'Title',
    editTaskModalLabelTextarea: 'Description',
    editTaskModalPlaceholderTextarea: 'Description',
    editTaskOptionSelectTitle: 'Priority',
    editTaskButtonText: 'Save changes',

    // create task toast success
    createTaskToastTitleSuccess: 'Success!',
    createTaskToastDescriptionSuccess: 'Task successfully created.',

    // create task toast error
    createTaskToastTitleError: 'Error!',
    createTaskToastDescriptionError: 'Something went wrong! Please try again',

    //edit task toast success
    editTaskToastTitleSuccess: 'Success!',
    editTaskToastDescriptionSuccess: 'Task successfully edited.',

    //edit task toast error
    editTaskToastTitleError: 'Error',
    editTaskToastDescriptionError: 'Something went wrong! Please try again',

    // task details mark as done
    taskDetailsToastTitleSuccess: 'Success!',
    taskDetailsToastDescriptionSuccess: 'Task successfully marked as done',

    taskDetailsToastTitleError: 'Error!',
    taskDetailsToastDescriptionError: 'Something went wrong! Please try again',

    // discard changes dialog
    discardChangesDialogTitle: 'Discard changes',
    discardChangesDialogDescription: 'Are you sure you want to discard all changes',
    discardChangesPrimaryButtonText: 'Discard',
    discardChangesSecondaryButtonText: 'Cancel',

    // delete task dialog
    deleteTaskTitleDialog: 'Delete task',
    deleteTaskDescriptionDialog: 'Are you sure you want to delete task',
    deleteTaskSecondaryButtonText: 'Cancel',
    deleteTaskPrimaryButtonText: 'Delete',

    //delete task toast success
    deleteTaskToastTitleSuccess: 'Success',
    deleteTaskToastDescriptionSuccess: 'Task successfully deleted',

    //delete task toast error
    deleteTaskToastTitleError: 'Error',
    deleteTaskToastDescriptionError: 'Something went wrong! Please try again',

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

    /* TASK CARD */
    taskCardPriority: 'Priority',
    taskCardChipText: 'In Progress',

    /* TASK DETAILS */
    taskDetailsTitle: 'Task details',
    taskDetailsButtonText: 'Mark as done',

    /* Chip text */
    chipTextDone: 'Done',
    chipTextInProgress: 'In progress',
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

    //logout dialog
    logoutDialogTitle: 'Abmelden',
    logoutDialogDescription: 'Möchten Sie sich wirklich abmelden?',
    logoutDialogPrimaryButton: 'Abmelden',
    logoutDialogSecondaryButton: 'Abbrechen',

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

    /* CREATE TASK */
    createTaskModalTitle: 'Aufgabe erstellen',
    createTaskModalDescription: 'Bitte geben Sie die erforderlichen Details ein, um die Aufgabe zu erstellen',
    createTaskModalSubTitle: 'Aufgabendetails',
    createTaskModalLabelInput: 'Aufgabendetails',
    createTaskModalPlaceholderInput: 'Titel',
    createTaskModalLabelTextarea: 'Beschreibung',
    createTaskModalPlaceholderTextarea: 'Beschreibung',
    createTaskOptionSelectTitle: 'Priorität',
    createTaskButtonText: 'Aufgabe erstellen',

    /* EDIT TASK */
    editTaskModalTitle: 'Aufgabe bearbeiten',
    editTaskModalSubTitle: 'Aufgabendetails',
    editTaskModalLabelInput: 'Aufgabendetails',
    editTaskModalPlaceholderInput: 'Titel',
    editTaskModalLabelTextarea: 'Beschreibung',
    editTaskModalPlaceholderTextarea: 'Beschreibung',
    editTaskOptionSelectTitle: 'Priorität',
    editTaskButtonText: 'Änderungen speichern',

    //edit task toast success
    editTaskToastTitleSuccess: 'Erfolg!',
    editTaskToastDescriptionSuccess: 'Aufgabe erfolgreich bearbeitet.',

    //edit task toast error
    editTaskToastTitleError: 'Fehler',
    editTaskToastDescriptionError: 'Etwas ist schiefgelaufen! Bitte versuchen Sie es erneut.',

    // delete task dialog
    deleteTaskTitleDialog: 'Aufgabe löschen',
    deleteTaskDescriptionDialog: 'Sind Sie sicher, dass Sie die Aufgabe löschen möchten?',
    deleteTaskSecondaryButtonText: 'Abbrechen',
    deleteTaskPrimaryButtonText: 'Löschen',

    //delete task toast success
    deleteTaskToastTitleSuccess: 'Erfolg',
    deleteTaskToastDescriptionSuccess: 'Aufgabe erfolgreich gelöscht',

    //delete task toast error
    deleteTaskToastTitleError: 'Fehler',
    deleteTaskToastDescriptionError: 'Etwas ist schiefgegangen! Bitte versuchen Sie es erneut.',

    // create task toast success
    createTaskToastTitleSuccess: 'Erfolg!',
    createTaskToastDescriptionSuccess: 'Aufgabe erfolgreich erstellt.',

    // create task toast error
    createTaskToastTitleError: 'Fehler!',
    createTaskToastDescriptionError: 'Etwas ist schiefgelaufen! Bitte versuchen Sie es erneut.',

    // task details mark as done
    taskDetailsToastTitleSuccess: 'Erfolg!',
    taskDetailsToastDescriptionSuccess: 'Aufgabe erfolgreich als erledigt markiert',

    taskDetailsToastTitleError: 'Fehler!',
    taskDetailsToastDescriptionError: 'Etwas ist schiefgegangen! Bitte versuche es erneut',

    // discard changes dialog
    discardChangesDialogTitle: 'Änderungen verwerfen',
    discardChangesDialogDescription: 'Möchten Sie wirklich alle Änderungen verwerfen?',
    discardChangesPrimaryButtonText: 'Verwerfen',
    discardChangesSecondaryButtonText: 'Abbrechen',

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

    /* TASK CARD */
    taskCardPriority: 'Priorität',
    taskCardChipText: 'In Bearbeitung',

    /* TASK DETAILS */
    taskDetailsTitle: 'Aufgabendetails',
    taskDetailsButtonText: 'Als erledigt markieren',

    /* Chip text */
    chipTextDone: 'Erledigt',
    chipTextInProgress: 'In Bearbeitung',
  },
};
