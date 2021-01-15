const salary = document.getElementById('salary1');
let hourlyRate;
let date = document.getElementById('date');
let hours = document.getElementById('hours');
let i =0; // This will be pushed to data.counter to use it as id
const data = {
    dateArr : [],
    hoursArr : [],
    counter : []
}

document.querySelector('.salary').addEventListener('click', function(){
    hourlyRate = parseInt(salary.value);
    hourlyRate = Math.floor((hourlyRate / 12 / 161) * 1.5);
    const disabled = document.querySelectorAll('.disabled');
    for (let i = 0; i < disabled.length; i++){
        disabled[i].removeAttribute('disabled') //When 'submit' button clicked, two input box on the bottom will be enabled
    }
    //Enable text in 'p' element
    document.getElementById('hourlyRate').style.display = 'block';    
    document.getElementById('hourlyRate').insertAdjacentHTML('beforeend', '<strong>'+hourlyRate+'</strong>'); 
})

document.querySelector('.Add').addEventListener('click', function(){
    data.dateArr.push(date.value);
    data.hoursArr.push(hours.value);  
    const addHTML = `<div id='${i}'><li><strong>${data.dateArr[i]}</strong> You have worked ${data.hoursArr[i]} hours</li><button class='edit'>Edit</button><button class='update'>Update</button><button class='delete'>Delete</button></div>`
    document.querySelector('ul').insertAdjacentHTML('afterbegin', addHTML);
    data.counter.push(i);
    i++;

    const sumHours = sum(data.hoursArr);
    document.getElementById('total').innerHTML=`You've worked <strong>${sumHours}</strong> hours and this would be <strong>£${sumHours * hourlyRate}</strong>`;

    //Enable text in 'p' element
    document.getElementById('total').style.display = 'block';
    clear();    
});

function sum (el){
    const newArr = el.map(el=> Number(el));
    return newArr.reduce((el, el1) => el + el1);
};

function clear(){
    date.value = '';
    hours.value = '';
};

document.getElementById('list').addEventListener('click', function(e) {
    const tgt = e.target;
    const parent = tgt.closest('li');
    const targetID = tgt.parentNode.id;

    if(tgt.classList.contains('edit')){
        date.value = data.dateArr[targetID];
        hours.value = data.hoursArr[targetID];
        date.style.color = 'rgb(236, 141, 32)';
        hours.style.color = 'rgb(236, 141, 32)';
        date.style.borderColor = 'rgb(236, 141, 32)';
        hours.style.borderColor = 'rgb(236, 141, 32)';

    } else if(tgt.classList.contains('update')){
        console.log('update')
        // console.log(document.getElementById('date').value, document.getElementById('hours').value);
        data.dateArr.splice(targetID, 1, date.value);
        data.hoursArr.splice(targetID, 1, hours.value);
        let currentNode = tgt.parentNode.childNodes[0];
        currentNode.innerHTML=`<div id='${targetID}'><li><strong>${data.dateArr[targetID]}</strong> You have worked ${data.hoursArr[targetID]} hours</li>`;

        //disable the style when 'update' completed
        date.style.color = '';
        hours.style.color = '';
        date.style.borderColor = '';
        hours.style.borderColor = '';

        const sumHours = sum(data.hoursArr);
        document.getElementById('total').innerHTML=`You've worked <strong>${sumHours}</strong> hours and this would be <strong>£${sumHours * hourlyRate}</strong>`;
    
        clear();

    } else if(tgt.classList.contains('delete')){
        //remove HTML tag contains 'delete' element
        tgt.parentNode.remove();
        //remove data from 'data' object
        data.dateArr.splice(targetID, 1)
        data.hoursArr.splice(targetID, 1)
        data.counter.splice(targetID, 1)
    }
});