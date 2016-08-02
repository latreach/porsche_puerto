/**
 * Tramsotopm the bottom circle text
 * @param selector
 * @param {string} newText
 * @param loc
 * @param delayDisappear
 * @param delayAppear
 * @returns void
 */
import {default as endAll} from './endAll';
import {default as wrap} from './wrap';
export default function (selector, newText, loc, delayDisappear, delayAppear) {
  selector
    // Current text disappear
    .transition().delay(700 * delayDisappear).duration(700)
    .attr('opacity', 0)
    // New text appear
    .call(endAll, () => {
      selector.text(newText)
        .attr('y', 24 * loc + 'px')
        .call(wrap, 350);
    })
    .transition().delay(700 * delayAppear).duration(700)
    .attr('opacity', 1);
}
