 //reference contains object array function 
    //object is collection of key value pair

    let obj={
      name:'bob',
      "full name" :"bob mark",
      greet: function(){
        console.log('hey');
      }

    };
    console.log(obj);
    obj.greet();//calling function

let obj2=obj;//shallow copy
console.log(obj2);
obj.age=67;
console.log(obj);
console.log(obj2);//same changes made

//delete parameter 
delete obj.age;
