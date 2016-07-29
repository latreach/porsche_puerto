var d3 = require("d3");
var data  = require("../data/zoom.json")

var margin = 40, 
    diameter = 1060;

var color = d3.scaleLinear()
            .domain([-1, 6])
            .range(["hsl(21, 90%, 30%)", "hsl(155, 30%, 40%)"])
            .interpolate(d3.interpolateHcl);

var pack = d3.pack()
            .padding(2)
            .size([diameter - margin, diameter -margin])
            .value(function(d){return d.size; })

var svg = d3.select("body"). append("svg")
            .attr("width", diameter)
            .attr("weight", diameter)
            .append("g")    
            .attr("transform", "translate(" + diameter /2 + "," + diameter /2 + ")");

d3.json(data, function(error, root){
        if (error) throw error;
        var focus = root,
            nodes = pack.nodes(root),   
            view;
        var circle  = svg.selectAll("circle")
                        .data(nodes)
                        .enter().append("circle")
                        .attr("class", function(d){return d.parent ? d.children ? "node": "node node--leaf" : "node node--root";})
                        .style("fill", function(d){if (focus !== d) zoom(d), d3.event.stopPropagation();});

            var text = svg.selectAll("text")
                    .data(nodes)
                    .enter().append("text")
                    .attr("class", "label")
                    .style("fill-opacity", function(d){return d.parent === root ? 1:0;})
                    .style("display", function(d){return d.parent === root ? "inline" : "none";})
                    .text(function(d){return d.name;});
        
        var node = svg.selectAll("circle,text");
        
        d3.select("body")
           .style("background", color(-1))
           .on("click", function(){zoom(root);});

        zoomTo([root.x, root.y, root.r*2 + margin]);
        

        function zoom(d) {
            var focus0 = focus; focus  = d;
            var transition  = d3.transition()
                                .duration(d3.event.altKey ? 7500 : 750)
                                .tween("zoom", function(d){
                                        var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r*2 + margin]);
                                                    return function(t) {zoomTo(i(t));};});

            transition.selectAll("text")
                       .filter(function(d){return d.parent === focus || this.style.display==="inline"; })
                       .style("fill-opacity", function(d){return d.parent === focus ? 1:0;})
                       .each("start", function(d){if (d.parent === focus) this.style = "inline";})
                       .each("end", function(d){if (d.parent !== focus ) this.style.display ="none";});
                        }
            function zoomTo(v){
                        var k = diameter / v[2]; view = v;
                        node.attr("transform", function(d){return "translate(" + (d.x - v[0])* k + ")";});
                         circle.attr("r", function(d){return d.r * k;});
                }
        });

d3.select(self.frameElement).style("height", diameter + "px");



