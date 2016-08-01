var d3 = require("d3");
var data  = require("../data/latreach.csv")

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    margin = 200,
    diameter=  1200;

var format = d3.format(",d");

var color = d3.scaleLinear()
            .domain([-1, 6])
            .range(["hsla(174, 32%, 31%, 1)", "hsla(345, 32%, 95%, 1)"]) //azules y verdosos
            .interpolate(d3.interpolateHcl);

var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var pack = d3.pack()
    .size([width - 2, height - 2])
    .padding(3);

d3.csv("latreach.csv", function(error, data) {
  if (error) throw error;

  var root = stratify(data)
      .sum(function(d) { return d.value; })
      .sort(function(a, b) { return b.value - a.value; });

  pack(root);


  var focus = root,
      nodes = root.descendants(),
      view;

  var node = svg.select("g")
    .selectAll("g")
    .data(root.descendants())
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .attr("class", function(d) { return "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"); })
      .each(function(d) { d.node = this; })
      .on("mouseover", hovered(true))
      .on("mouseout", hovered(false));

  node.append("circle")
      .attr("id", function(d) { return "node-" + d.id; })
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.depth); });

  var leaf = node.filter(function(d) { return !d.children; });

  leaf.append("clipPath")
      .attr("id", function(d) { return "clip-" + d.id; })
    .append("use")
      .attr("xlink:href", function(d) { return "#node-" + d.id + ""; });

  leaf.append("text")
      .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
    .selectAll("tspan")
      .data(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1).split(/(?=[A-Z][^A-Z])/g); })
    .enter().append("tspan")
      .attr("x", 0)
      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
      .text(function(d) { return d; });

  node.append("title")
      .text(function(d) { return d.id + "\n" + format(d.value); });



  d3.select("svg")
      .style("background", color(-1))
      .on("click", function() { zoom(node); });

  zoomTo([node.x, node.y, node.r * 2 + margin]);

  function zoom(d) {
    var focus0 = node; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    nodes.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
	nodes.attr("r", function(d) { return d.r * k; });
  }

});

function hovered(hover) {
  return function(d) {
    d3.selectAll(d.ancestors().map(function(d) { return d.node; })).classed("node--hover", hover);
  };
}




d3.select(self.frameElement).style("height", diameter + "px");
