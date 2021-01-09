const salary = document.getElementById('salary1');
let hourlyRate;
let date = document.getElementById('date');
let hours = document.getElementById('hours');
let i =0;
const data = {
    date : [],
    hours : [],
    counter : []
}
document.querySelector('.salary').addEventListener('click', function(){
    hourlyRate = parseInt(salary.value);
    hourlyRate = Math.floor((hourlyRate / 12 / 161) * 1.5);
    const disabled = document.querySelectorAll('.disabled');
    for (let i = 0; i < disabled.length; i++){
        disabled[i].removeAttribute('disabled')
    }
    //Enable text in 'p' element
    document.getElementById('hourlyRate').style.display = 'block';    
    document.getElementById('hourlyRate').insertAdjacentHTML('beforeend', '<strong>'+hourlyRate+'</strong>'); 
})

document.querySelector('.Add').addEventListener('click', function(){
    data.date.push(date.value);
    data.hours.push(hours.value);  
    const addHTML = `<div id='${i}'><li><strong>${data.date[i]}</strong> You have worked ${data.hours[i]} hours</li><button class='edit'>Edit</button><button class='update'>Update</button><button class='delete'>Delete</button></div>`
    document.querySelector('ul').insertAdjacentHTML('afterbegin', addHTML);
    data.counter.push(i);
    i++;

    //Enable text in 'p' element
    document.getElementById('total').style.display = 'block';
    clear();    
});

function clear(){
    document.getElementById('date').value = '';
    document.getElementById('hours').value = '';
};

document.getElementById('list').addEventListener('click', function(e) {
    const tgt = e.target;
    const parent = tgt.closest('li');
    const targetID = tgt.parentNode.id;

    if(tgt.classList.contains('edit')){
        date.value = data.date[targetID];
        hours.value = data.hours[targetID];
        date.style.color = 'red';
        hours.style.color = 'red';

    } else if(tgt.classList.contains('update')){
        console.log('update')
        // console.log(document.getElementById('date').value, document.getElementById('hours').value);
        data.date.splice(targetID, 1, date.value);
        data.hours.splice(targetID, 1, hours.value);
        let currentNode = tgt.parentNode.childNodes[0];
        document.getElementById(targetID).innerHTML.replace(data.date[targetID], 'IIII');

        clear();
    } else if(tgt.classList.contains('delete')){
        //remove HTML tag contains 'delete' element
        tgt.parentNode.remove();
        //remove data from 'data' object
        data.date.splice(targetID, 1)
        data.hours.splice(targetID, 1)
        data.counter.splice(targetID, 1)
    }
});