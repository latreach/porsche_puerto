/**
 * Transition the top circle text
 * @param {string} newText
 * @param loc
 * @param delayDisappear
 * @param {string} finalText
 * @param xloc
 * @param w
 */
import {default as wrap} from './wrap';
import {default as endAll} from './endAll';
import d3 from 'd3';
export default function changeTopText (
  selector,
  newText,
  loc,
  delayDisappear,
  delayAppear,
  finalText = false,
  xloc = 0,
  w = 350
) {
  selector
    // Current text disappear
    .transition().delay(700 * delayDisappear).duration(700)
    .attr('opacity', 0)

    // New text appear
    .call(endAll, () => {
      selector
        .text(newText)
        .attr('y', -24 * loc + 'px')
        .attr('x', xloc + 'px')
        .call(wrap, w);
    })
    .transition().delay(700 * delayAppear).duration(700)
    .attr('opacity', 1)
    .call(endAll, () => {
      if (finalText === true) {
        d3.select('#clicker')
          // .text(buttonTexts[counter - 2])
          .style('pointer-events', 'auto')
          .transition().duration(400)
          .style('border-color', '#363636')
          .style('color', '#363636');
      }
    });
}
