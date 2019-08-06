
const fname = document.querySelector('#fname')

const contentOne = document.querySelector('.contentOne')

// const lname = document.querySelector('#lname')

const ourList = [];

fname.onchange = function() { //onchange event
    ourList.push(fname.value)

    if(fname.value.length < 3 || fname.value.length > 20 || fname.value.length === ""){
        alert('name should be longer that 3 n not more than 20')
    }else{
        
    
    const para = document.createElement('span')
    para.className = 'listPara'

    ourList.forEach(function(item, index){
       
        para.innerHTML = `${index + 1} . ${item}`
        contentOne.appendChild(para);

    });
}

}

