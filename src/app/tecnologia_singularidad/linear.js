export const margin = {top: 20, right: 80, bottom: 30, left: 50};
export const width = 1500 - margin.left - margin.right;
export const height = 600 - margin.top - margin.bottom;
export const svg = d3.select('#tecnologia-animation')
  .append('div')
  .attr('class', 'svg-container')
  .append('svg')
  .attr(
    'viewBox', 
    [0,0,window.innerWidth, window.innerHeight -55].join(' ')
    )
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .attr('preserveAspectRatio', 'xMidYMid meet')
  .attr('class', 'svg-content-responsive');

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
const superscript = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const formatPower = function(d) { 
  return (d + '').split('').map(function(c) { return superscript[c]; }).join(''); 
};


export const d3.legend = function(g) {
  g.each(function() {
    var g= d3.select(this),
        items = {},
        svg = d3.select(g.property("nearestViewportElement")),
        legendPadding = g.attr("data-style-padding") || 5,
        lb = g.selectAll(".legend-box").data([true]),
        li = g.selectAll(".legend-items").data([true])

    lb.enter().append("rect").classed("legend-box",true)
    li.enter().append("g").classed("legend-items",true)

    svg.selectAll("[data-legend]").each(function() {
        var self = d3.select(this)
        items[self.attr("data-legend")] = {
          pos : self.attr("data-legend-pos") || this.getBBox().y,
          color : self.attr("data-legend-color") != undefined ? self.attr("data-legend-color") : self.style("fill") != 'none' ? self.style("fill") : self.style("stroke") 
        }
      })

    items = d3.entries(items).sort(function(a,b) { return a.value.pos-b.value.pos})

    
    li.selectAll("text")
        .data(items,function(d) { return d.key})
        .call(function(d) { d.enter().append("text")})
        .call(function(d) { d.exit().remove()})
        .attr("y",function(d,i) { return i+"em"})
        .attr("x","1em")
        .text(function(d) { ;return d.key})
    
    li.selectAll("circle")
        .data(items,function(d) { return d.key})
        .call(function(d) { d.enter().append("circle")})
        .call(function(d) { d.exit().remove()})
        .attr("cy",function(d,i) { return i-0.25+"em"})
        .attr("cx",0)
        .attr("r","0.4em")
        .style("fill",function(d) { console.log(d.value.color);return d.value.color})  
    
    // Reposition and resize the box
    var lbbox = li[0][0].getBBox()  
    lb.attr("x",(lbbox.x-legendPadding))
        .attr("y",(lbbox.y-legendPadding))
        .attr("height",(lbbox.height+2*legendPadding))
        .attr("width",(lbbox.width+2*legendPadding))
  })
  return g
}






d3.csv('./assets/data/linear_1.csv', type, function (error, data) {
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
    .attr('stroke-width', 1.2)
    .call(d3.axisBottom(x));

  g.append('g')
    .attr('class', 'axis axis--y')
    .attr('stroke-width', 3)
    .call(d3.axisLeft(y).tickFormat(function (d) {
      const value = d * 1e9;
      return "10" + formatPower((value/10000) / 1e9); 
    }))
    .append('text')
      .attr('transform', 'rotate(0)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('fill', 'steelblue')
      .text('');

  //modifcando el texto de los ejes
  g.selectAll('.axis text')
    .attr('transform', 'rotate(0)')
    .style('font', '20px sans-serif');
  const linea = g.selectAll('.linea')
    .data(linear).enter()
    .append('g')
      .attr('class', 'linea');

  linea.append('path')
    .attr('class', 'line')
    .attr('d', function (d) {
      return line(d.values);
    })
    .style('stroke', 'transparent')
  //.style('stroke-opacity', 0.7)
    .attr('stroke-width', 5)
    .attr('stroke-dasharray', ('10,10'))
  //.style('stroke', function(d) { return z(this.parentNode.__data__.values); })
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
    .style('font', '25px ubuntu')
    .style('font-style', 'italic')
   .each(function (d, i) {
      d3.select(this)
       .transition().duration(7000).delay(3500 * i)
    .style('fill', function (f) {
       return z(f.id);
     });
   })
    .text(function(d){return d.id;});

  legend = svg,append("g")
    .attr("class", "legend")
    .attr("transform", "translate(50,30)")
    .style("font-size", "12px")
    .call(d3.legend)

  setTimeOut(function(){
    legend
      .style("font-size", "12px")
      .attr("data-style-padding", 10)
      .call(d3.legend)
  },1000
  )




});
