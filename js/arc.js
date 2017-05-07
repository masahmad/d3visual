function arc1 ()
{
	
	const colors = ['green', 'blue', 'red','gray','yellow','purple','cyan'];
	var radius = 70;
    var p = Math.PI * 2;
	
	 d3.json("data/testdata.json", function (data)
    {
	
    var canvas = d3.select(".arc1").append("svg")
        .attr("width", 1200)
        .attr("height", 500)
		.attr("border",1);

   
   
 var group = canvas.selectAll("g")
        .data(data)
		.enter()
		.append("g")
		.attr("transform", "translate(-100,200)");
		
		
		// transition fx
		group.transition()
		.delay(2000)
		.duration(3000)
		.attr("transform", function(d,i) {return "translate(" +  ((i+1)*160) + ",200)" });
		
		

		console.log(group);
    
	
	  var arc = d3.svg.arc()
        .innerRadius(radius - 20)
        .outerRadius(radius)
        .startAngle(0);
		
		
var background = group.append("path")

    .datum({endAngle: p})
    .style("fill", "#eee")
    .attr("d", arc);
	
	// Add the foreground arc 60%
var foreground =  group.append("path")
    .datum( function(d) { return {endAngle: (d.performance/100) * p}})
    .style("fill", function(d) {return colors[Math.floor(Math.random() * 7) + 1]})
    .attr("d", arc);
	
	
	
//text anchor , middle centres text
	var tx = group.append('text')
	.text(function(d) {return d.performance +"%"})
	.attr("font-size","250%")
	.attr("fill","red")
	.attr("text-anchor","middle");
	
	var txLabel = group.append('text')
	.text(function(d) {return d.appname})
	.attr("font-size","120%")
	.attr("fill","#666")
	.attr("dy", "110" )
	.attr("dx", "-40" )
	.append('text')

	

});	
	
}




function arc2 ()
{
	
	const colors = ['green', 'blue', 'red','gray','yellow','purple','pink'];
	var radius = 150;
    var p = Math.PI * 2;
	
	 d3.json("data/testdata.json", function (data)
    {
	
    var canvas = d3.select(".arc2").append("svg")
        .attr("width", 1000)
        .attr("height", 500)
		.attr("border",1);

   
   

   console.log(data);
  //console.log(d3.min(data, function(d) { return d; }));
  console.log(d3.max(data, function(d,i) { return d.performance + "," + i; }));
   
   
   // get max index of array
   var maxdataObj = d3.max(data, function(d,i) { return d.performance; });
   var mindataObj = d3.min(data, function(d,i) { return d.performance; });
   
   var newObj=[];
   newObj.push(maxdataObj,mindataObj);
     console.log(newObj);
      
 var group = canvas.selectAll("g")
        .data(newObj)
		.enter()
		.append("g")
		.attr("transform", function(d,i) {return "translate(" + ((i+1)*400) + ",200)" });
		

				
		
    
	
	  var arc = d3.svg.arc()
        .innerRadius(radius - 20)
        .outerRadius(radius)
        .startAngle(0);
		
		
		
		
var background = group.append("path")
    .datum({endAngle: p})
    .style("fill", "#eee")
    .attr("d", arc);
	
	// Add the foreground arc 60%
var foreground =  group.append("path")
    .datum( function(d) { return {endAngle: (d/100) * p}})
    .style("fill", function(d) {return colors[Math.floor(Math.random() * 7) + 1]})
    .attr("d", arc);
	
	
	//text anchor , middle centres text
	var tx = group.append('text')
	.text(function(d) {return d +"%"})
	.attr("font-size","250%")
	.attr("fill","red")
	.attr("text-anchor","middle");
	
	

});	
	
}























