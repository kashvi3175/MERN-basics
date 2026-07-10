 //dynamic nature of object
     let obj={
      age:18,
      wt:56,
      ht:178
     };
     console.log(obj);
   //obj.color('pink'); error
   obj.color='pink';

     console.log(obj);//new property added


     //reference copy
     let a={val:3};
     let b=a;//reference copy all changes will be changed in b or a as well
     b.val=5;
     console.log(a,b);





     //object cloning


//spread operator
    let src={
      age:18,
      wt:56,
      ht:178
     };
     let dest = {...src};
     console.log(src,dest);
src.age=67;//wont change in dest
console.log(dest);//remains same


//assign
let obj2={value:4};
let obj3=Object.assign({},src);
console.log(obj2,obj3);

//cloning multiple objects in one 

let finalob=Object.assign({},obj2,src);
console.log(finalob);

//also can use iteration 
let dest2={};
for( let key in src ){
  newkey=key;
  newval=src[key];
  //entering value
  dest[newkey]=newval;
}
console.log(dest2);
