export const width = 960;
export const height = 500;
export const radius = Math.min(width, height)/2;
export const donutWidth = 50;
export const color = d3.scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#64486b", "#a05d56"]);
export const arc = d3.arc()
  .innerRadius(radius - donutWidth)
  .outerRadius(radius - 70);
export const pie = d3.pie()
  .value(function(d){return d.dimension;});
export const svg = d3.select("#concesionarias-animacion")
  .append('svg')
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + (width /2) + "," + (height/2)+ ")");

export function type(d){
  d.dimension = +d.dimension;
  return d;
}
console.log("ora ya")
d3.csv('./assets/data/pie_data.csv', type, function(error, data){
  if (error){
    throw error;
  };
  const g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
    .style("fill", function(d){return color(d.data.tipo);});

  g.append("text")
    .attr("transform", function(d){retun "translate(" + arc.centroid(d) + ")";});
    .attr("dy", ".35em")
    .text(function(d){return d.data.tipo;});

});
