export const stratify = d3.stratify().parentId(function (d) {
  return d.id.substring(0, d.id.lastIndexOf('.'));
});
