/**
 * Returns an array of tick angles and labels, given a group
 * @param  {Object} d - A D3 array, expected endAngle, startAngle and value
* properties
 * @returns {Array}
 */
export default function(d) {
  const k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1).map( (v, i) =>
    ({
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v + '%'
    });
  });
}
