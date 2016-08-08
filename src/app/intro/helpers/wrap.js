/**
 * Wraps SVG text
 * Taken from http://bl.ocks.org/mbostock/7555321
 * @param {string} text
 * @param {float}  width
 * @return void
 */
export default function (text, width) {
  const words = text.text().split(/\s+/).reverse();
  const lineHeight = 1.4;
  const y = text.attr('y');
  const x = text.attr('x');
  const dy = parseFloat(text.attr('dy'));
  let word = words.pop();
  let line = [];
  let lineNumber = 0;
  let tspan = text
    .text(null)
    .append('tspan')
      .attr('x', x)
      .attr('y', y)
      .attr('dy', dy + 'em');

  do {
    line.push(word);
    tspan.text(line.join(' '));
    if (tspan.node().getComputedTextLength() > width) {
      line.pop();
      tspan.text(line.join(' '));
      line = [word];
      tspan = text.append('tspan')
        .attr('x', x)
        .attr('y', y)
        .attr('dy', ++lineNumber * lineHeight + dy + 'em')
        .text(word);
    }
    word = words.pop();
  } while (word);
}
