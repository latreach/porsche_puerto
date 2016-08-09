import 'jquery';
import 'bootstrap-loader';
import 'font-awesome-loader';

import 'd3';
import 'lodash';

if (ENV === 'production') {
  // Production

} else {
  // Development
  require('./index.html');
  Error.stackTraceLimit = Infinity;
}
