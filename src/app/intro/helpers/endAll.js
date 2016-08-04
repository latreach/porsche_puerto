/**
 * Taken from
 *   https://groups.google.com/forum/#!msg/d3-js/WC_7Xi6VV50/j1HK0vIWI-EJ
 * Calls a function only after the total transition ends
 * @param transition
 * @param {Function} callback
 * @returns void
 */
export default function (transition, callback) {
  let n = 0;

  transition
    .each(function () {
      ++n;
    })
    .on('end', function () {
      if (!--n) {
        callback.apply(this, arguments);
      }
    });
}
