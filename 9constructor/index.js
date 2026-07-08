 //constructor is a special method in a class
//runs automatically when an object is created

class human{
  constructor(){
    console.log('constructor called');
  }
}
let obj = new human;//automatically calls the function 


class human1 {

      //properties

      age=18;//public
     #wt=56; //private
      ht=175;

constructor(newage,newwt,newht){
  this.age=newage;
  this.#wt=newwt;
  this.ht=newht;
}

      //behavior
      walking(){
        console.log('walk');

      }
run(){
  console.log('run'
  );

}
//accessing private member within the class

get weight(){
  return this.#wt;
}



set  modifyweight(val){


this.#wt=val;
}
 }



 let obj1 = new human1(34,65,78);
 console.log(obj1.age);
 console.log(obj1.weight);//access the private member
 




