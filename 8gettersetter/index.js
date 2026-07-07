  class human {

      //properties
      age=18;//public
     #wt=56; //private
      ht=175;
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



 let obj = new human;
 console.log(obj.age);
 //console.log(obj.#wt);gives syntax error 
 //call function 
 obj.walking();


console.log(obj.weight);   // 56 ,getter is accessed as a property not as a function

obj.modifyweight = 70;     // setter called and new value is given

console.log(obj.weight);   // 70 new valuw
