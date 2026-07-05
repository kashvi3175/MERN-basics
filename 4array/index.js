  //map
 //form new array by applying some function

 let arr=[1,2,3,4];
 const sq=arr.map((number) => {
  return number**2;
 })
 console.log(sq);


 //filter according to osem condition 
let arr2=[1,2,3,,'jack','hanna'];
let result=arr2.filter((value)=>{
  if(typeof(value)==='string'){
    return value;

  }
  else return false;
})
console.log(result);//only gives string value


//reduce
//has two values acc and curr
//reduces values of an array in one single value
let arr3=[20,10,30];
const sum =arr3.reduce((acc,num)=> acc+num,0);
console.log(sum);


//finding the max value

const max=arr3.reduce((acc,num)=> {return acc>num
  ?acc:num;
},0);
console.log(max);










//sort ascending descending

const ascend=arr3.sort((a,b)=>a-b

)
console.log(ascend);

const descend=arr3.sort((a,b)=>b-a

)
console.log(descend);

//array of string
arr4=['jack','hanna','rocky','harry','ron'];
console.log(arr4.sort());






//indexof
//finds the position of element
console.log(arr4.indexOf('ron'));
//can check presence of an element

const arr5=[1,2,3,4,5,];
if (arr.indexOf(20) !== -1) {
  console.log("Found");
}



//length

console.log(arr5.length);





//for each 
//used in arrays

const num=[2,5,7,4,6,8];
num.forEach((num)=>{
  console.log(num);
});







//forin
//used for objects
 const details={
  name:'jack',
  age:30

 }

 for(const key in details){
  console.log(key,details[key]);
 }




//forof
//iterate over values aarays strings
const fruits=['apple','banana','mango'];
for(const fruit of fruits){
  console.log(fruit);

}

const numbers=[1,3,5,7];
for(const number of numbers){
  console.log(number);
}