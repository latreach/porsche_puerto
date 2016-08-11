export function connector (d) {
  return 'M' + d.y + ',' + d.x + 'C' + (d.y + d.parent.y) / 2 + ',' +
		d.x + ' ' + (d.y + d.parent.y) / 2 + ',' + d.parent.x + ' ' + d.parent.y + ',' +
		d.parent.x;
}
