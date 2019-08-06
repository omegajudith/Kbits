

/*Getting the unique values with Ids */
const fname = document.querySelector('#fname'); 
const lname = document.querySelector('#lname');
const contentOne = document.querySelector('.contentOne');
const contentTwo = document.querySelector('.contentTwo');
const contentThree = document.querySelector('.contentThree')
const contentFour = document.querySelector('.contentFour')


/*This  this paragraph will be created in the empty
 contentone div to store diffrent p tags and its text content when  enter is taped*/
 /*This is how we dynamically create html elements*/
const paraOne = document.createElement('p'); 

/*This  this paragraph will be created in the empty
 contenttwo div for you to see what your typing just below the inputs*/
 /*This is how we dynamically create html elements*/
const paraTwo = document.createElement('p'); 


/*This  this paragraph will be created in the empty
 contentone div to store diffrent p tags and its text content when  enter is taped*/
 /*This is how we dynamically create html elements*/
const paraThree = document.createElement('p')

/*This  this paragraph will be created in the empty
 contenttwo div for you to see what your typing just below the inputs*/
 /*This is how we dynamically create html elements*/
const paraFour = document.createElement('p')

 /* oninput will dispaly the appended text from innerhtml while still typing
 she has a sister called onchange, that only dispalys after clicking the submit button*/
 /*everytime i type, see whats going on, use oninput, see after submit, use onchange */
fname.oninput = function() {  // oninput event
    paraTwo.innerHTML = fname.value;
    contentTwo.appendChild(paraTwo);
    console.log(fname);
}


/*Home Work Arrays */

/*onchange method that only displyas when on submit or when enter is taped */
fname.onchange = function() { //onchange event
    paraOne.innerHTML = fname.value;
    contentOne.appendChild(paraOne);
    paraTwo.innerHTML = ''
    fname.value = ""
}



lname.oninput = function(){
    paraFour.innerHTML = lname.value;
    contentFour.appendChild(paraFour);
}


lname.onchange =function(){
    paraThree.innerHTML = lname.value;
    contentThree.appendChild(paraFour);
    paraFour.innerHTML = '';
    lname.value ='';
}


