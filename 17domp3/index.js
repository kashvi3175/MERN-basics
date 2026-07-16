 //adding element in specific position

//before begin before end after begin after end
 let mydiv = document.getElementById('mydiv');

let newelement=document.createElement('span');
newelement.textContent='heyyy';
mydiv.insertAdjacentElement('beforebegin',newelement);


//remove child
let parent=document.querySelector('#mydiv');
let child=document.querySelector('#para1');

parent.removeChild(child);