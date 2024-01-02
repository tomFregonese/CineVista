// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzc3YTE5ODkxNTgyZWRjNWYwMmU0MDQ4NTJiOTMxOCIsInN1YiI6IjY1NzVlYjZmYTg0YTQ3MmRlNmViODNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._O9R3D0bktbeYGWnCgoS5aR5ZCmxdiqhtBf1k94srTc';


export const environment = {
  production: false
};

export {
  TMDB_BASE_URL,
  API_KEY
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
