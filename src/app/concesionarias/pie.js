export const dataset = [
  {name: 'nana', percent: 39.1},
  {name: 'dede', percent: 32.5},
  {name: 'ñaña', percent: 13.6 },
  {name: 'dodo', percent: 8.7},
  {name: 'das', percent: 12}
];


export const pie = d3.pie()
  .value(function(d){return d.percent})
  .sort(null)
  .padAngle(.03);


export const w = 300;
export const h = 300;
export const outerRadius = w/2;
export const innerRadius = 100;

//export const color = d3.scaleOrdinal()
//.range(["#98abc5", "#8a89a6", "#7b6888", "#64486b", "#a05d56", "#d0743c", "#ff    8c00"]);
export const color = d3.schemeCategory10();

export const arc = d3.arc()
  .outerRadius(outerRadius)
  .innerRadius(innerRadius);

export const svg = d3.select("#tecnologia-animation")
  .append("svg")
  .attr({
    width:w,
    height:h,
    class:'shadow'
  }).append('g')
  .attr({
    transform: 'translate(' + w/2 + ',' + h/2 + ')'});

export const path = svg.selectAll('path')
  .data(pie(dataset))
  .enter()
  .append('path')
  .attr({
    d: arc,
    fill: function(d,i){
      return color(d.data.name);
    }
    });


path.transition()
  .duration(1000)
  .attrTween('d', function(d) {
        var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
        return function(t) {
                  return arc(interpolate(t));
              };
    });
 
 
export const  restOfTheData=function(){
    const  text = svg.selectAll('text')
        .data(pie(dataset))
        .enter()
        .append("text")
        .transition()
        .duration(200)
        .attr("transform", function (d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
        .attr("dy", ".4em")
        .attr("text-anchor", "middle")
        .text(function(d){
                    return d.data.percent+"%";
                })
        .style({
                    fill:'#fff',
                    'font-size':'10px'
                });
 
    const  legendRectSize=20;
    const  legendSpacing=7;
    const  legendHeight=legendRectSize+legendSpacing;
 
 
    const legend=svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr({
          class:'legend',
          transform: function(d,i){
            return 'translate(-35' + ((i *legendHeight) - 65) + ')';
          }

        })

    legend.append('rect')
      .attr({
        width: legendRectSize,
        height: legendrectSize,
        rx:20,
        ry:20
      })
      .style({
        fill:color,
        stroke: color
      });

    legend.append('text')
      .attr({
        x:30,
        y:15
      })
    .text(function(d){
        return d;
    }).style({
      fill:'#929DAF',
      'font-size':'14px'
    });
};
setTimeOut(restOfTheData, 1000);


      
    
