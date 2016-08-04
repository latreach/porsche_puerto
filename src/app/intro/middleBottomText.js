/**
 * Middle Bottom Text Initialization
 */
import {textCenter} from './textCenter';
import {wrap} from './helpers';

export const middleBottomText = textCenter.append('text')
  .attr('class', 'explanation')
  .attr('text-anchor', 'middle')
  .attr('x', 0 + 'px')
  .attr('y', 24 * 3 / 2 + 'px')
  .attr('dy', 1 + 'em')
  .attr('opacity', 1)
  .text(`
    The respondents gave us information about the brand of their current main
    phone, and the brand of their previous main phone
  `)
  .call(wrap, 350);
