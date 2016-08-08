/**
 * Tramsotopm the bottom circle text
 * @param {string} newText
 * @param loc
 * @param delayDisappear
 * @param delayAppear
 * @returns void
 */
import {endAll} from './endAll';
import {middleBottomText, wrap} from '../components';
export function changeBottomText (newText, loc, delayDisappear, delayAppear) {
  middleBottomText
    // Current text disappear
    .transition().delay(700 * delayDisappear).duration(700)
    .attr('opacity', 0)
    // New text appear
    .call(endAll, () => {
      middleBottomText.text(newText)
        .attr('y', 24 * loc + 'px')
        .call(wrap, 350);
    })
    .transition().delay(700 * delayAppear).duration(700)
    .attr('opacity', 1);
}
