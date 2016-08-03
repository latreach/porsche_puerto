/**
 * Wraps SVG text
 * Taken from http://bl.ocks.org/mbostock/7555321
 * @param {string} text
 * @param {float}  width
 * @return void
 */
import d3 from 'd3';
export default function (text, width) {
  text.each(function () {
    const tickText = d3.select(this);
    const words = tickText.text().split(/\s+/).reverse();
    const y = tickText.attr('y');
    const dy = parseFloat(tickText.attr('dy'));
    const lineHeight = 1.1;
    let word;
    let line = [];
    let lineNumber = 0;
    let tspan = tickText
      .text(null)
      .append('tspan')
      .attr('x', 0)
      .attr('y', y)
      .attr('dy', dy + 'em');

    while (word) {
      line.push(word);
      tspan.text(line.join(' '));

      // TODO: Check if getComputedTextLength method exists
      if (tspan.node().getComputedTextLength() > width) {
        line = [word];
        tspan = text
          .append('tspan')
          .attr('x', 0)
          .attr('y', y)
          .attr('dy', ++lineNumber * lineHeight + dy + 'em')
          .text(word);

        word = words.pop();
      }
    }
  });
}
