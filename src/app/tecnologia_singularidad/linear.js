  export const margin = {top:20, right:80, bottom:30, left:50};
  export const  width = 1100 - margin.left -margin.right;
  export const  height = 800 - margin.top - margin.bottom;
  export const  svg = d3.select("#tecnologia-animation").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom);

  export const  g = svg.append("g")
    .attr(
      "transform", 
      "translate(" + margin.left + "," + margin.top + ")" 
    );
  export const  parseTime = d3.timeParse("%Y%m%d");

  export const  x = d3.scaleTime().range([0,width]),
      y = d3.scaleLinear().range([height,0]),
      z = d3.scaleOrdinal(d3.schemeCategory10);

  export const  line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d){return x(d.tiempo);})
    .y(function(d){return y(d.linear);});

  d3.csv("./datos/linear.csv", type, function(error, data){
    if(error) throw error;
    
    export const  linear = data.columns.slice(1).map(function (id) {
      return {
        id: id,
        values: data.map(function (d) {
          return { tiempo: d.tiempo, linear: d[id]};
        })
      };
    });

    x.domain(d3.extent(data, function (d) {return d.tiempo;}));
    y.domain([
      d3.min(linear, function(c){return d3.min(c.values, function(d){return d.linear;});}),
      d3.max(linear, function(c){return d3.max(c.values,function(d){return d.linear;});})
    ]);
    z.domain(linear.map(function(d){return d.id;}));


    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill","steelblue")
      .text("me quiero volver mono");

    export const linea = g.selectAll(".linea")
      .data(linear).enter()
      .append("g")
        .attr("class", "linea");
    
    linea.append("path")
      .attr("class", "line")
      .attr("d", function (d) { return line(d.values); })
      .style('stroke', 'transparent')
      .each(function (d, i) {
        d3.select(this)
          .transition().duration(2000).delay(1000 * i)
          .style('stroke', function (d) { return z(d.id); })
      });

    linea.append("text")
      .datum(function (d) { return { id: d.id, value: d.values[d.values.length - 1]}; })
      .attr("transform", function (d) { return "translate(" + x(d.value.tiempo) + "," + y(d.value.linear) + ")"; })
      .attr("x", 3)
      .attr("dy", "0.35em")
      .style("font", "10px sans-serif")
      .text(function(d){return d.id;});
});

export default function type(d, _, columns){
        d.tiempo = parseTime(d.tiempo);
        for(var i=1, n = columns.length, c; i<n; ++i) d[c= columns[i]]= +d[c];
        return d;
}
