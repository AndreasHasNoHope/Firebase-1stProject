// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from "firebase";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyANqRJTO0W3XL8M7_Xxvon3SfhE5bK70ZU",
    authDomain: "precise-line-261610.firebaseapp.com",
    databaseURL: "https://precise-line-261610.firebaseio.com",
    projectId: "precise-line-261610",
    storageBucket: "precise-line-261610.appspot.com",
    messagingSenderId: "394049005286",
    appId: "1:394049005286:web:2ead21d066f8587d3efd27",
    measurementId: "G-XPS32740F6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
