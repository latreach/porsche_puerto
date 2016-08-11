export const margin = {top: 20, right: 80, bottom: 30, left: 50};
export const width = 1200 - margin.left - margin.right;
export const height = 600 - margin.top - margin.bottom;
export const svg = d3.select('#tecnologia-animation')
  .append('div')
  .attr("class", "svg-container")
  .append("svg")
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .attr("preserveAspectRatio", "xMidYMid meet")
  .attr("class", "svg-content-responsive");

export const g = svg.append('g')
  .attr(
    'transform',
    'translate(' + margin.left + ',' + margin.top + ')'
  );

export const parseTime = d3.timeParse('%Y%m%d');
export const x = d3.scaleTime().range([0, width]);
export const y = d3.scaleLinear().range([height, 0]);
export const z = d3.scaleOrdinal(d3.schemeCategory10);

export const line = d3.line()
  .curve(d3.curveBasis)
  .x((d) => x(d.tiempo))
  .y((d) => y(d.linear));

export function type (d, _, columns) {
  d.tiempo = parseTime(d.tiempo);
  for (let i = 1, n = columns.length, c; i < n; ++i) {
    d[c = columns[i]] = +d[c];
  }
  return d;
}

d3.csv('./assets/data/linear.csv', type, function (error, data) {
  if (error) {
    throw error;
  }

  const linear = data.columns.slice(1).map(function (id) {
    return {
      id: id,
      values: data.map(function (d) {
        return {tiempo: d.tiempo, linear: d[id]};
      })
    };
  });

  x.domain(d3.extent(data, function (d) {
    return d.tiempo;
  }));

  y.domain([
    d3.min(linear, function (c) {
      return d3.min(c.values, function (d) {
        return d.linear;
      });
    }),
    d3.max(linear, function (c) {
      return d3.max(c.values, function (d) {
        return d.linear;
      });
    })
  ]);

  z.domain(linear.map(function (d) {
    return d.id;
  }));

  g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + height + ')')
    .attr("stroke-width", 1.2)
    .call(d3.axisBottom(x));

  g.append('g')
    .attr('class', 'axis axis--y')
    .attr("stroke-width", 5)
      .call(d3.axisLeft(y))
    .append('text')
      .attr('transform', 'rotate(-10)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('fill', 'steelblue')
      .text('');

  const linea = g.selectAll('.linea')
    .data(linear).enter()
    .append('g')
      .attr('class', 'linea');

  linea.append('path')
    .attr('class', 'line')
    .attr('d', function (d) {
      return line(d.values);
    })
    .style('stroke', '#789044')
    .style("stroke-opacity", 0.7)
    .attr("stroke-width", 5)
    .attr("stroke-dasharray", ("10,10"))
    .style("stroke", function(d) { return z(this.parentNode.__data__.values); })
    
    .each(function (d, i) {
      d3.select(this)
        .transition().duration(7000).delay(3500 * i)
        .style('stroke', function (f) {
          return z(f.id);
        });
    });

  linea.append('text')
    .datum(function (d) {
      return {id: d.id, value: d.values[d.values.length - 1]};
    })
    .attr('transform', function (d) {
      return 'translate(' + x(d.value.tiempo) + ',' + y(d.value.linear) + ')';
    })
    .attr('x', 3)
    .attr('dy', '0.75em')
    .style('font', '12px ubuntu')
    .text(function (d) {
      return d.id;
    });
});
