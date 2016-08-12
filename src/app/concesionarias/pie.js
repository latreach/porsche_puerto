export const data = [
  {label: '80% compra online', count : 25},
  {label: '54% mejor experiencia', count: 25},
  {label: '74% prefiere un buen vendedor', count: 25},
  {label: '84% compra en persona', count: 25},
  {label: '84% prefiere probar producto', count: 25}
];


export const width  = 960;
export const height = 500;
export const radius = Math.min(width, height)/2;
export const donutWidth = 100;
export const color = d3.scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7n6888", "#6b486b","#a05d56","#d0743c"]);

export const arc = d3.arc()
  .innerRadius(radius -donutWidth)
  .outerRadius(radius);

export const pie = d3.pie()
  .value(function(d){return d.count;})
  .sort(null);


export const svg = d3.select("#concesionarias-animation").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width /2 + "," + height / 2 + ")");

export const path = svg.selectAll('path')
  .data(pie(data))
  .enter().append('path')
  .attr("d", arc)
  .attr("fill", function(d,i){return color(d.data.label);});

//  path.append("text")
// .attr("transform", function(d){return "translate(" + arc.centroid(d) + ")";})
// .attr("dy", ".35em")
// .text(function(d){return d.data.label;})
// .style('font', '12px sans.serif');






