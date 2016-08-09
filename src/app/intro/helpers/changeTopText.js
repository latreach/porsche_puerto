/**
 * Transition the top circle text
 * @param {string} newText
 * @param loc
 * @param delayDisappear
 * @param {string} finalText
 * @param xloc
 * @param w
 */
import {endAll} from './endAll';
import {wrap, middleTopText} from '../components';

export function changeTopText (
  newText,
  loc,
  delayDisappear,
  delayAppear,
  finalText = false,
  xloc = 0,
  w = 350
) {
  middleTopText
    // Current text disappear
    .transition().delay(700 * delayDisappear).duration(700)
    .attr('opacity', 0)

    // New text appear
    .call(endAll, () => {
      middleTopText
        .text(newText)
        .attr('y', -24 * loc + 'px')
        .attr('x', xloc + 'px')
        .call(wrap, w);
    })
    .transition().delay(700 * delayAppear).duration(700)
    .attr('opacity', 1);
}
