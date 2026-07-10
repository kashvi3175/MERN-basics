 //math object 
    Math.PI;//prints pi value

    console.log(Math.max(40,78,56));
    console.log(Math.round(1.5));
    console.log(Math.floor(1.5));
    console.log(Math.ceil(1.5));
    console.log(Math.abs(-1.5));
    console.log(Math.random());//no 0 or between 0 and 1
    console.log(Math.sqrt(1.5));



    //date object

let curr= new Date();
console.log(curr);
let curr1= new Date('June 20 1998 08:15');
console.log(curr.getDay());//0 sunday 6 saturday 
//similarly january corresponds to 0
console.log(curr.getFullYear());

//setting a date 
console.log(curr1.setFullYear(2006));

console.log(curr1);

