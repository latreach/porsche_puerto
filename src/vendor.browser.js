import 'jquery';
import 'bootstrap-loader';
import 'd3';
import 'font-awesome-sass-loader';
import 'lodash';

if (ENV === "production") {
  // Production

} else {
  // Development
  require("./index.html");
  Error.stackTraceLimit = Infinity;
}
