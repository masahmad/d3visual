
function meterChart ()
{
alert('meter');

var svg = d3.selectAll("body").append("svg")
    .attr("width", 300)
    .attr("height", 300);

var arc = d3.svg.arc()
    .append("g")
    .attr("class", "arc")
    .innerRadius(30)
    .outerRadius(120)
    .startAngle(120 * (Math.PI/180))
    .endAngle(240 * (Math.PI/180));

var plot = svg

var gauge = plot
    .append("path")
    .attr("d", arc)
    .attr("class", "gauge")
    .style("fill", "#ddd")
    .attr("transform", "translate(150,130) rotate(180)")
    .on("click", turnNeedle);

var needle = svg
  .append("g")
    .attr("class", "needle")
    .attr("transform", "translate(150 , 130)")
  .append("path")
    .attr("class", "tri")
    .attr("d", "M-3 0 L0 -130 L3 0 S3 5 0 5 S-3 5 -3 0 Z")
    //.attr("d", "M" + (300/2 + 3) + " " + (120 + 10) + " L" + 300/2 + " 0 L" + (300/2 - 3) + " " + (120 + 10) + " C" + (300/2 - 3) + " " + (120 + 20) + " " + (300/2 + 3) + " " + (120 + 20) + " " + (300/2 + 3) + " " + (120 + 10) + " Z")
    .attr("transform", "rotate(-60)");

function turnNeedle()
{
    needle
        .transition()
        .duration(2000)
        .attr("transform", "rotate(40)");
}    



  

}
