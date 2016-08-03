/**
 * Returns an array of tick angles and labels, given a group
 * @param  {Object} d - A D3 array, expected endAngle, startAngle and value
 *      properties
 * @returns {Array}
 */
import {range} from 'd3';

export default function (d) {
  const k = (d.endAngle - d.startAngle) / d.value;

  return range(0, d.value, 1).map((v, i) =>
    ({
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v + '%'
    })
  );
}
