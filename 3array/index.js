 //collection of items
    let arr=[1,3,'hi'];
    console.log(arr);


    let arr2=new Array('hey',8,94);
    console.log(arr2);
//it is type of object




//push and pop to remove and add value
arr.push('jack');
 console.log(arr);

arr.pop();//removes last element
 console.log(arr);



//shift and unshift to add and remove items on the left side
arr.unshift('jack');//add in start
 console.log(arr);

 arr.shift();//removes first element
 console.log(arr);




 //slice  specify end and start index does not include last index
 let arr3=[1,2,3,4,5]
 console.log(arr3);
 
 
let slicedarr=arr3.slice(1,3);//extracts 1 and 2 index
console.log(arr3);//remains same
console.log(slicedarr);//returns a new array

//splice
///using splice changes te array

let arr4=[1,2,3,4,5]

arr4.splice(1,4);//removes 1 to 4 index

console.log(arr4);

//now we can also add element
arr4.splice(1,0,'hi');
console.log(arr4);

//replace
arr4.splice(-1,1,'hey');
console.log(arr4);




