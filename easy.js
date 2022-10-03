// EASY: Write a function that would allow you to do this:

// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


function exercise (e){
    return function(){return e;};}
  
  var run = exercise("Today's excerscise : running");
  console.log(run()); 

  var swim = exercise("Today's excerscise : swimming");
  console.log(swim()); 
