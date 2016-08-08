/**
 * Middle Top Text
 */
import {textCenter} from './constructors';
import {wrap} from './helpers';

export const middleTopText = textCenter.append('text')
  .attr('class', 'explanation')
  .attr('text-anchor', 'middle')
  .attr('x', 0 + 'px')
  .attr('y', -24 * 10 / 2 + 'px')
  .attr('dy', 1 + 'em')
  .attr('opacity', 1)
  .text(`
      Tendencias
  `)
  .call(wrap, 350);
