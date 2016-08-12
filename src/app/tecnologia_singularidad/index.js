const margin = {top: 20, right: 100, bottom: 30, left: 50};
const width = window.innerWidth * 0.75 - margin.left - margin.right;
const height = window.innerHeight - margin.top - margin.bottom - 60;
const parseTime = d3.timeParse('%Y%m%d');

function formatPower (d) {
  const superscript = '⁰¹²³⁴⁵⁶⁷⁸⁹';

  return (d + '').split('').map(function (c) {
    return superscript[c];
  }).join('');
};

function type (d, _, columns) {
  d.tiempo = parseTime(d.tiempo);
  for (let i = 1, n = columns.length, c; i < n; ++i) {
    c = columns[i];
    d[c] = parseFloat(d[c]);
  }
  return d;
}

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);
const z = d3.scaleOrdinal(d3.schemeCategory10);

const svg = d3.select('#tecnologia-animation')
  .append('div')
    .attr('class', 'svg-container')
  .append('svg')
    .attr('class', 'svg-content-responsive')
    .attr('viewBox', [0, 0, width, height].join(' '))
    .attr('preserveAspectRatio', 'xMidYMid meet');

const g = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

const line = d3.line().curve(d3.curveBasis)
  .x((d) => x(d.tiempo))
  .y((d) => y(d.linear));

d3.csv('./assets/data/linear_2.csv', type, function (error, data) {
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

  x.domain(d3.extent(data, (d) => d.tiempo));

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
    .attr('transform', 'translate(0,' + height - 60 + ')')
    .attr('stroke-width', 1.2)
    .call(d3.axisBottom(x));

  g.append('g')
    .attr('class', 'axis axis--y')
    .attr('stroke-width', 3)
    .call(d3.axisLeft(y).tickFormat(function (d) {
      const value = d * 1e9;

      return '10' + formatPower(value / 10000 / 1e9);
    }))
    .append('text')
      .attr('transform', 'rotate(0)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('fill', 'steelblue')
      .text('');

  // modifcando el texto de los ejes
  g.selectAll('.axis--y text')
    .attr('transform', 'rotate(0)')
    .style('font', '20px sans-serif');

  const linea = g.selectAll('.linea')
    .data(linear).enter()
    .append('g')
    .attr('class', 'linea');

  g.selectAll('.axis--x text')
    .attr('transform', 'rotate(0)')
    .style('font', '18px sans-serif');

  linea.append('path')
    .attr('class', 'line')
    .attr('d', function (d) {
      return line(d.values);
    })
    .style('stroke', 'transparent')
  // .style('stroke-opacity', 0.7)
    .attr('stroke-width', 5)
    .attr('stroke-dasharray', '10,10')
  // .style('stroke', function(d) { return z(this.parentNode.__data__.values); })
    .each(function (d, i) {
      d3.select(this)
        .transition().duration(7000).delay(3500 * i)
        .style('stroke', function (f) {
          return z(f.id);
        });
    });

  // linea.append('text')
  // .datum(function(d){
  //   return {id: d.id, value: d.values[d.values.length -1]};
  // })
  // .attr('transform', function(d){ 'translate(' + x(d.value.tiempo) + ',' + y(d.value.linear)  + ')'} )
  // .attr('x', 3)
  // .attr('dy', '0.75em')
  // .style('font', '12px ubuntu')
  // .text(function(d){return d.id});
  //  linea.append('text')
  // .datum(function (d) {
  //   return {id: d.id, value: d.values[d.values.length - 1]};
  // })
  // .attr('transform', function (d) {
  //  return 'translate(' + x(d.value.tiempo) + ',' + y(d.value.linear) + ')';
  // }
  // )
  // .attr('x', 3)
  // .attr('dy', '0.75em')
  // .style('font', '25px ubuntu')
  // .style('font-style', 'italic')
  // .each(function (d, i) {
  //   d3.select(this)
  //   .transition().duration(7000).delay(3500 * i)
  // .style('fill', function (f) {
  //   return z(f.id);
  // });
  // })
  // .text(function(d){return d.id;});
});
