 //setting default value
    function sayname(myname = 'sam'){
console.log('your name',myname);
    }
    sayname();//returns the default sam
    sayname('bella');

    //

function solve(value={name:'sam',age:18}){//passing object as the default parameter
  console.log('heyy',value);
}

solve();

//can also insert array or function 



//if parameter is null like solve(null) then it gives null but undefined then default parameter