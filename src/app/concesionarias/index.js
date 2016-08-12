const width = 960;
const height = 700;
const radius = Math.min(width, height)/4;
const donutWidth = -150;
const color = d3.scaleOrdinal()
  .range(['#E83C0E', '#FFDB2C', '#6ADE70', '#F82E83', '#009a5c']);
const arc = d3.arc()
  .innerRadius(radius - donutWidth)
  .outerRadius(radius - 50);
const pie = d3.pie().value((d) => d.dimension);

const svg = d3.select('#concesionarias-animacion')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

function type (d) {
  d.dimension = +d.dimension;
  return d;
}

d3.csv('./assets/data/pie_data.csv', type, function (error, data) {
  if (error) {
    throw error;
  }

  const g = svg.selectAll('.arc')
    .data(pie(data))
    .enter().append('g')
      .attr('class', 'arc');

  g.append('path')
    .attr('d', arc)
    .style('fill', function (d) {
      return color(d.data.tipo);
    });

  g.append('text')
    .attr('transform', function (d) {
      return 'translate(' + arc.centroid(d) + ')';
    })
    .attr('dy', '.35em')
    .style('font-size', '18px')
    .style('fill', '#333333')
    .text(function (d) {
      return d.data.tipo;
    });
});
