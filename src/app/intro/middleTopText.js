/**
 * Middle Top Text
 */
import {textCenter} from 'textCenter';
import {wrap} from '../helpers';
export const middleTopText = textCenter.append('text')
  .attr('class', 'explanation')
  .attr('text-anchor', 'middle')
  .attr('x', 0 + 'px')
  .attr('y', -24 * 40 / 2 + 'px')
  .attr('dy', '1em')
  .attr('opacity', 1)
  .text(`
      For the Dutch version of the Deloitte Global Mobile Consumer Survey.
      Deloitte asked 2000 residents of the Netherlands about their mobile phone
      behaviour
  `)
  .call(wrap, 350);
