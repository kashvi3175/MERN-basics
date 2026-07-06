//function hoisting
//moving declarations to the top of the scope during compilation automatically gets rearranged in the scope
//function are the first class citizens

    greet();
    function greet(){
      console.log('hi');
    }

//function expression will give reference error


    //variable hoisting var keyword
    var name; // hoisted declaration moves up but not the values

console.log(name);//undefined

name = "John";

//no hoisting with let and const 

//class hoisting is not possible it throws a reference error






//function /call stack lifo

function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();//firstly goes to second fun then first and second
