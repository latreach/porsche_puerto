/**
 * Introduction
 */
import * as d3 from 'd3';
import {
  stopClicker, runProgressBar, changeTopText, changeBottomText
} from '../helpers';

export function draw1 () {
  // Disable click event on clicker button
  stopClicker();

  // Show and run the progressBar
  runProgressBar(700 * 11);

  changeTopText(`These days most people switch phones every few years.
      Some people stay loyal but many also switch to a different phone brand
    `, 4 / 2, 0, 1);

  changeTopText(`In the next few steps I would like to intriduce you to the
      flows of people between the phone brands
  `, 8 / 2, 9, 10, true);

  changeBottomText(`Let's start by drawing out the division of the 1846
      respondents, that have had at least 2 phones
  `, 1 / 2, 0, 10);

  d3.selectAll('.arc')
    .transition().delay(9 * 700).duration(2100)
    .style('opacity', 0)
    .on('end', () => d3.selectAll('.arc').remove());
}
