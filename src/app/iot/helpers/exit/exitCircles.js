export function exitCircles (selector) {
  selector.select('circle')
      .attr('r', 1e-6);
}

