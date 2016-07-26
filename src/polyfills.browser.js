import 'core-js/es6';

// import 'core-js/es7';
// require('zone.js/dist/zone');

if (process.ev.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
}
