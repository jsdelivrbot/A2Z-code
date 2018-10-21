// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC_ae_4BHUnutpGbEJ9wWI8HVD-Td0jFj0",
    authDomain: "a2withfirebase.firebaseapp.com",
    databaseURL: "https://a2withfirebase.firebaseio.com",
    projectId: "a2withfirebase",
    storageBucket: "a2withfirebase.appspot.com",
    messagingSenderId: "891625492141"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
