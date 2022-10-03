// EASY: Write a function that would allow you to do this:

// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


// function exercise (e){
//     return function(){return e;};}
  
//   var run = exercise("running");
//   console.log(run()); 

//   var swim = exercise("swimming");
//   console.log(swim()); 









// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"

// function cps(x) {
//     return function (y) {return "Each person gets " + (x / y) + " slices of pizza"; };}
  
//   var sharePizza = cps(8);
//   console.log(sharePizza(2));
//   console.log(sharePizza(3));





// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.
// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
// You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.


//   ppi =() => {let  personInfo = {  me:"Hignacio", ssn: 0101010101,};
//     return(() => personInfo.me)();};

//   console.log(ppi());












// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".

class person {
    constructor(name, job , age){
        this.name = "Hignacio";
        this.job = Animator;
        this.age = 19;
    }
};

class exercise {
    constructor(name, job , age , exercise){
        this.exercise = "I love boxing"
        console.log(`${exercise}`);
    }
};

class job {
    constructor(name, job , age , fetchjob){
      this.fetchjob = "animator"
      console.log(`${name} is an ${fetchjob}`);
    }
};



