export function exitText(selector) {
  selector.select('text')
    .attr('fill-opacity', 1e-6);
}
