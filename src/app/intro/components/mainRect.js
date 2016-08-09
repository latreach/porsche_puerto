import * as d3 from 'd3';
import {mainContainer, mainSquareSize} from './constructors';

export const mainRect = mainContainer
  .append('rect')
    .attr('width', mainSquareSize)
    .attr('height', mainSquareSize)
    .attr('x', -mainSquareSize / 2)
    .attr('y', -mainSquareSize / 2)
    .attr('fill', 'red')
    .style('opacity', 0)
    .transition().duration(2000).ease(d3.easeLinear)
    .style('opacity', 0.8);

