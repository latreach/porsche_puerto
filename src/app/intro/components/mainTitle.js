import {textContainer, mainSquareSize} from './constructors';
import {wrap} from './helpers';

export const mainTitle = textContainer.append('text')
  .attr('class', 'mainTitle')
  .attr('text-anchor', 'middle')
  .attr('x', 0)
  .attr('y', (-mainSquareSize / 2 - 12 * 10) + 'px')
  .attr('dy', 1 + 'em')
  .attr('opacity', 0)
  .text('Bienvenidos a la era del futuro')
  .call(wrap, 350)
  .transition().duration(2000)
  .style('opacity', 1);
