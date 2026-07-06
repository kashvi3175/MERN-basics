//variable scoping global function block 
  //variable can be created by let const and var
  //let and const in block scope only works inside the block otherwise reference error
  //var in function scope is available




  var age=15;//global variable can use let and const
//can be used anywhere
//all three are accessible
console.log(age);
{
 console.log(age); 
}
if(true){
  console.log(age);
}

for(let i=1;i<2;i++){
  console.log(age);
}
function details(){
  console.log("hi your age",age);

}
details();


//function scope


function details1(){
  var name='hannah';
  console.log("hi your name",name);//works fine

}
details1();
console.log("hi your name",name);//error for all three




//block scope
{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); //  1
//console.log(b); //  ReferenceError
//console.log(c); //  ReferenceError


//temporal dead zone
//During this period, the variable exists but cannot be accessed. Trying to use it causes a ReferenceError.

