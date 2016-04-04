//load the data format
var dataset;
levelNames = ['level_01_round_1','level_01_round_2','level_02_round_1','level_02_round_2','level_03_round_1','level_03_round_2','level_03_round_3',   
   'level_03_round_4','level_04_round_1','level_04_round_2','level_05_round_1','level_05_round_2','level_06_round_1','level_07_round_1','level_08_round_1','level_08_round_2', 'level_09_round_1', 'level_10_round_1', 'level_11_round_1','level_11_round_2', 'level_12_round_1', 'level_12_round_2'];

d3.csv("cleanedAlien3.csv", function(error,result){

    result.forEach(function(d){
        d.firstAccuracyArray = d.firstAccuracyArray.split(" ").filter(function(d){return d!=""}).slice(1,-1).map(parseFloat);
        d.lastAccuracyArray = d.lastAccuracyArray.split(" ").filter(function(d){return d!=""}).slice(1,-1).map(parseFloat);
        d.playTimeArray = d.playTimeArray.split(" ").filter(function(d){return d!=""}).slice(1,-1).map(parseFloat);
        d.timesAttemptedArray = d.timesAttemptedArray.split(" ").filter(function(d){return d!=""}).slice(1,-1).map(parseFloat);
        d.firstRatioArray = d.firstRatioArray.split(" ").filter(function(d){return d!=""}).slice(1,-1).map(parseFloat);
        d.firstReactionTimeArray = d.firstReactionTimeArray.split(" ").filter(function(d){return d!=""}).slice(1,-1).map(parseFloat);

        var start =new Date();  // dummy start time
        d.timeSinceStart = fillTimes(d.playTimeArray, start); // make up times for start/stop

    });
    dataset = result;
    console.log(formatData(dataset));
});

function fillTimes(durations ,startTime){
  
  var times = [startTime];
  var currentTime =startTime;
  durations.forEach(function(d){
    currentTime = addSeconds(currentTime,d);
    times.push(currentTime);
  });  
  return times;

}

function addSeconds(date, seconds) {
    return new Date(date.getTime() + seconds*60000/60.);
}

function formatData(studentData){   // calculate actual data to be visualized
  var outputData=[];
  studentData.forEach(function(d){  //for each student
      for (i = 0; i < d.timeSinceStart.length -1 ; i++) {  // fill in bar data for each level
            barData = {"startDate": d.timeSinceStart[i], "endDate": d.timeSinceStart[i+1] , "taskName":d.userID ,"status":"RUNNING",  //to do set random status
             "levelName":levelNames[i] ,"lastAccuracy":d.lastAccuracyArray[i] ,"timesDied": d.timesAttemptedArray[i] }; 
             outputData.push(barData);
          }
  });
    return outputData;
}



var tasks = [
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student1","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student2","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student3","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student4","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student5","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student6","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student7","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student8","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student9","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student10","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student11","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student12","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student13","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student14","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student15","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student16","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student17","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student18","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student19","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student20","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student21","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student22","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student23","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student24","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student25","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student26","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student27","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student28","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student29","status":"RUNNING"},
{"startDate":new Date("Sun Dec 09 01:36:45 EST 2012"),"endDate":new Date("Sun Dec 09 02:36:45 EST 2012"),"taskName":"student30","status":"RUNNING"}
];

var taskStatus = {
    "SUCCEEDED" : "bar-succeeded",
    "FAILED" : "bar-failed",
    "RUNNING" : "bar-running",
    //"KILLED" : "bar-killed"
};

var taskNames = [];
for(i = 1; i<31; i++){
  taskNames.push("student" + i);
};

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%H:%M";
var timeDomainString = "1day";

var gantt = ganttChart().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);

var margin = {
     top : 20,
     right : 40,
     bottom : 20,
     left : 80
};
gantt.margin(margin);

gantt.timeDomainMode("fit");
changeTimeDomain(timeDomainString);

gantt(tasks);

var interval = setInterval(addTask, 1000);

function stopAddTask(){
  clearInterval(interval);
  return;
}

function changeTimeDomain(timeDomainString) {
    this.timeDomainString = timeDomainString;
    switch (timeDomainString) {
      case "1hr":
        format = "%H:%M:%S";
        gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -1), getEndDate() ]);
      break;
      case "3hr":
        format = "%H:%M";
        gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -3), getEndDate() ]);
      break;

      case "6hr":
        format = "%H:%M";
        gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -6), getEndDate() ]);
      break;

      case "1day":
        format = "%H:%M";
        gantt.timeDomain([ d3.time.day.offset(getEndDate(), -1), getEndDate() ]);
      break;
      default:
      format = "%H:%M"

    }
    gantt.tickFormat(format);
    gantt.redraw(tasks);
}

function getEndDate(taskId) {
    //the last end time by now;
    var lastEndDate = Date.now();
    //
    for (var i = tasks.length - 1; i >= 0; --i) {
      console.log(tasks[i].taskName, taskNames[taskId]);
      if (tasks[i].taskName == taskNames[taskId]) {
        console.log(i, taskId)
        console.log(tasks[i].taskName, taskNames[taskId])
        return tasks[i].endDate;
      }
    }
    return lastEndDate;
}

function addTask() {

    var taskStatusKeys = Object.keys(taskStatus);

    for(i=0; i < taskNames.length; i++){
      console.log(i);
      var lastEndDate = getEndDate(i);
      console.log(lastEndDate);
      var taskStatusName = taskStatusKeys[Math.floor(Math.random() * taskStatusKeys.length)];
      var taskName = taskNames[i];

      tasks.push({
      "startDate" : d3.time.hour.offset(lastEndDate, 0),
      "endDate" : d3.time.hour.offset(lastEndDate, (Math.ceil(Math.random() * 3)) + 1),
      "taskName" : taskName,
      "status" : taskStatusName
      });
    }

    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
};

function ganttChart() {
    var FIT_TIME_DOMAIN_MODE = "fit";
    var FIXED_TIME_DOMAIN_MODE = "fixed";
    
    var margin = {
    top : 20,
    right : 40,
    bottom : 20,
    left : 150
    };
    var selector = 'body';
    var timeDomainStart = d3.time.day.offset(new Date(),-3);
    var timeDomainEnd = d3.time.hour.offset(new Date(),+3);
    var timeDomainMode = FIT_TIME_DOMAIN_MODE;// fixed or fit
    var taskTypes = [];
    var taskStatus = [];
    var height = document.body.clientHeight - margin.top - margin.bottom-5;
    var width = document.body.clientWidth - margin.right - margin.left-5;

    var tickFormat = "%H:%M";

    var keyFunction = function(d) {
    return d.startDate + d.taskName + d.endDate;
    };

    var rectTransform = function(d) {
    return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
    };

    var x = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ]).range([ 0, width ]).clamp(true);

    var y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);
    
    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(tickFormat)).tickSubdivide(true)
        .tickSize(8).tickPadding(8);

    var yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);

    var initTimeDomain = function(tasks) {
      if (timeDomainMode === FIT_TIME_DOMAIN_MODE) {
          if (tasks === undefined || tasks.length < 1) {
            timeDomainStart = d3.time.day.offset(new Date(), -3);
            timeDomainEnd = d3.time.hour.offset(new Date(), +3);
            return;
          }

          tasks.sort(function(a, b) {
            return a.endDate - b.endDate;
          });

          timeDomainEnd = tasks[tasks.length - 1].endDate;

          tasks.sort(function(a, b) {
            return a.startDate - b.startDate;
          });

          timeDomainStart = tasks[0].startDate;
      }
    };

    var initAxis = function() {
      x = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ]).range([ 0, width ]).clamp(true);
      y = d3.scale.ordinal().domain(taskTypes).rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);
      xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format(tickFormat)).tickSubdivide(true)
          .tickSize(8).tickPadding(8);
      yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);
    };
    
    function gantt(tasks) {
    
      initTimeDomain(tasks);
      initAxis();
    
      var svg = d3.select(selector)
        .append("svg")
        .attr("class", "chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("class", "gantt-chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
      
      svg.selectAll(".chart")
         .data(tasks, keyFunction).enter()
         .append("rect")
         .attr("rx", 5)
             .attr("ry", 5)
         .attr("class", function(d){ 
             if(taskStatus[d.status] == null){ return "bar";}
             return taskStatus[d.status];
             }) 
         .attr("y", 0)
         .attr("transform", rectTransform)
         .attr("height", function(d) { return y.rangeBand(); })
         .attr("width", function(d) { 
             return (x(d.endDate) - x(d.startDate)); 
          });
       
       
      svg.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(0, " + (height - margin.top - margin.bottom) + ")")
         .transition()
         .call(xAxis);
         
      svg.append("g").attr("class", "y axis").transition().call(yAxis);
         
      return gantt;

    };
    
    gantt.redraw = function(tasks) {

      initTimeDomain(tasks);
      initAxis();
    
      var svg = d3.select(".chart");

      var ganttChartGroup = svg.select(".gantt-chart");
      var rect = ganttChartGroup.selectAll("rect").data(tasks, keyFunction);
        
      rect.enter()
        .insert("rect",":first-child")
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("class", function(d){ 
          if(taskStatus[d.status] == null){ return "bar";}
          return taskStatus[d.status];
        }) 
        .transition()
        .attr("y", 0)
        .attr("transform", rectTransform)
        .attr("height", function(d) { return y.rangeBand(); })
        .attr("width", function(d) { 
          return (x(d.endDate) - x(d.startDate)); 
        });

      rect.transition()
        .attr("transform", rectTransform)
        .attr("height", function(d) { return y.rangeBand(); })
        .attr("width", function(d) { 
          return (x(d.endDate) - x(d.startDate)); 
        });
        
      rect.exit().remove();

      svg.select(".x").transition().call(xAxis);
      svg.select(".y").transition().call(yAxis);
    
      return gantt;
    };

    gantt.margin = function(value) {
      if (!arguments.length)
        return margin;
      margin = value;
      return gantt;
    };

    gantt.timeDomain = function(value) {
      if (!arguments.length)
        return [ timeDomainStart, timeDomainEnd ];
      timeDomainStart = +value[0], timeDomainEnd = +value[1];
      return gantt;
    };

    /**
     * @param {string}
     *                vale The value can be "fit" - the domain fits the data or
     *                "fixed" - fixed domain.
     */
    gantt.timeDomainMode = function(value) {
      if (!arguments.length)
          return timeDomainMode;
      timeDomainMode = value;
      return gantt;

    };

    gantt.taskTypes = function(value) {
      if (!arguments.length)
          return taskTypes;
      taskTypes = value;
      return gantt;
    };
    
    gantt.taskStatus = function(value) {
      if (!arguments.length)
          return taskStatus;
      taskStatus = value;
      return gantt;
    };

    gantt.width = function(value) {
      if (!arguments.length)
          return width;
      width = +value;
      return gantt;
    };

    gantt.height = function(value) {
      if (!arguments.length)
          return height;
      height = +value;
      return gantt;
    };

    gantt.tickFormat = function(value) {
      if (!arguments.length)
          return tickFormat;
      tickFormat = value;
      return gantt;
    };

    gantt.selector = function(value) {
      if (!arguments.length)
          return selector;
      selector = value;
      return gantt;
    };

    return gantt;
};
