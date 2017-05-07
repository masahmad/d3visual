function donutChart ()
{
    
		var t0 = Date.now();
	
	d3.json("data/testdata.json", function (data)
    {
        var radius      = 250;
        var color       = d3.scaleOrdinal()
            .range(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);

        var canvas   = d3.select(".donutChart")
            .append("svg")
            .attr("width", 600)
            .attr("height", 600)
			;//.attr("transform", "translate(250,0)");

        var group       = canvas.append("g")
            .attr("transform", "translate(250,350)");

        var arc  = d3.arc()
            .innerRadius(150)
            .outerRadius(radius);

        var pie         = d3.pie()
            .value(function (d)
            {
                return d.performance;
            });

        var theArc      = group.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc");

        theArc.append("path")
            .attr("d", arc)
			.style("stroke", "#aaa")
			.style("stroke-width", "5")
			//.style("opacity", .2) 
            .attr("fill", function (d)
            {
                return color(d.data.appname);
            });

        theArc.append("text")
            .attr("transform", function (d)
            {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("dy", "0.15em")
            .text(function (d)
            {
                return d.data.appname;
            });
			
	
	
	
	var curAngle = 0;
var interval = null;
goRotate();
	
canvas.on("mousedown", function(d) {
    interval = setInterval(goRotate,10);
});

canvas.on("mouseup", function(d){
    clearInterval(interval);
})


	function goRotate() {
    curAngle += 1;
    group.attr("transform", "translate(" + 600 / 2 + "," + 600 / 2 + ") rotate(" + curAngle + "," + 0 + "," + 0 + ")");
  }
	
	
	
	
			
    });
	
}
