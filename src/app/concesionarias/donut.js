export const d4 =  function(d4){
const dataset = [
  {label: 'probando', count : 5},
  {label: 'probando', count: 5},
  {label: 'probando', count: 10},
  {label: 'probando', count: 20},
  {label: 'probando', count: 60}
];

console.log(dataset);
 const width  = 960;
 const height = 500;
 const radius = Math.min(width, height)/2;
 const donutWidth = 100;
//export const color = d3.scaleOrdinal()
//.range(["#98abc5", "#8a89a6", "#7n6888", "#6b486b","#a05d56","#d0743c"]);
 const color = d3.scaleOrdinal(d3.schemeCategory20b);
console.log(color);
 const arc = d3.arc()
  .innerRadius(radius - donutWidth)
  .outerRadius(radius);

  
const pie = d3.pie()
  .value(function(d){return d.count;})
  .sort(null);


const svg = d3.select("#concesionarias-animation").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + (width /2) + "," + (height / 2) + ")");

const path = svg.selectAll('path')
  .data(pie(dataset))
  .enter().append('path')
  .attr("d", arc)
  .attr("fill", function(d){return color(d.data.label);});

//  path.append("text")
// .attr("transform", function(d){return "translate(" + arc.centroid(d) + ")";})
// .attr("dy", ".35em")
// .text(function(d){return d.data.label;})
// .style('font', '12px sans.serif');

}
window.d4;




