const margin  = {top:20, right:20, bottom:30, left:40 };
const width   = 960 - margin.left - margin.right;
const height  = 500 - margin.top - margin.bottom;

const  x = d3.scaleBand()
  .range([0,width])
  .padding(0.1);

const  y = d3.scaleLinear()
  .range([height, 0]);

const color = d3.scaleOrdinal()
  .range(['#C14515','#BD9600','#4672B1','#3871C2','#4672B1']);
const svg = d3.select("#concesionarias-animacion")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom )
  .append("g")
  .attr("transform", "translate" + margin.left + "," + margin.top + ")");

d3.csv("./assets/data/pie_data_1.csv", function(error, data){
  if (error){
    throw error;
  
  }
   
  data.forEach(function(d){
    d.dimension = +d.dimension;  
  });
  x.domain(data.map(function(d){return d.tipo;}));
  y.domain([0,d3.max(data, function(d){return d.dimension})]);

  svg.selectAll('.bar')
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d){return x(d.tipo);})
    .attr("width", x.bandwidth())
    .attr("y", function(d){return y(d.dimension);})
    .attr("height", function(d){return height - y(d.dimension);})
    .style("fill", function(d){return color(d.tipo)});
  svg.append("g")
    .attr("transform", "translate(0" + height + ")")
    .call(d3.axisBottom(x));
  svg.append("g")
    .call(d3.axisLeft(y));
});




