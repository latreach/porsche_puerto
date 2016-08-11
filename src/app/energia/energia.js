export const margin  = 20;
export const diamete = 900;
//creando la gráfica
export const svg = d3.select("#energia-animation").append("svg")
  .attr("width", diameter)
  .attr("height", diameter)
  .append("g")
  .attr("transform", "translate(" + diameter / 2 + "," + diameter /2 + ")");

export const color = d3.scaleLinear()
  .domain([-1, 6])
  .range(["hsla(146, 100%, 25%, 1)", "hsla(345, 32%, 95%, 1)"]) //azules y verdosos
  .interpolate(d3.interpolateHcl);

export const stratify = d3.stratify()
    .parentId(function(d) { return 
       d.id.substring(0, d.id.lastIndexOf(".")); });


export const pack = d3.pack()
  .size([diameter-margin, diameter-margin])
  .padding(100);

//llamando los datos
d3.csv("./assets/data/latreach.csv", function(error, data) {
  if (error){ 
    throw error;
  }

  const root = stratify(data)
    .sum(function(d) { 
          return d.value; })
    .sort(function(a, b) { 
          return b.value - a.value;});
  pack(root)
  const focus = root,
  nodes = root.descendants(), 
  view;  

  const circle = svg.selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("class", function(d){
      return d.parent ? d.children ? "node": "node node--leaf": "node node--root";})
    .style("fill", function(d){
      return d.children ? color(d.depth): null;})
    .on("click", function(d){
      if (focus !==d)zoom(d), 
        d3.event.stopPropagation(); });

  const text = svg.selectAll("text")
    .data(nodes)
    .enter().append("text")
    .attr("class", "label")
    .style("display", function(d){
      return d.parent === root ? "inline": "none";})
    .text(function(d){
      return d.id;});

   const  node = svg.selectAll("circle,text");
  
  d3.select("body")
    .style("background","white")
    .on("click", function(){
      zoom(focus);});
  
  zoomTo([root.x, root.y, root.r * 2 + margin]);


 function zoom(d){
    const focus0 =focus; focus = d;
    const transition = d3.transition()
      .duration(d3.event.altKey ? 7500: 750)
      .tween("zoom", function(d){
        var i = d3.interpolateZoom(view,
          [focus.x, focus.y, focus.r*2 + margin]);
               return function(t){zoomTo(i(t));};
      });

   transition.selectAll("text")
      .filter(function(d){
        return d.parent === focus || this.style.display  === "inline";})
     .style("fill-opacity", function(d){
       return d.parent === focus ? 1: 0;})
     .each("start", function(d){
       if (d.parent===focus) 
         this.style.display = "inline";})
      .each("end", function(d){
        if (d.parent !== focus) this.style.display = "none";});
}

function zoomTo(v){
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d){
      return "translate(" + (d.x- v[0]) * k + "," + (d.y-v[1])*k + ")";});
    circle.attr("r", function(d){
      return d.r * k;});
}
});

//export const svg;


