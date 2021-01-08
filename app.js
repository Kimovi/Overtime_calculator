const salary = document.getElementById('salary1');
let hourlyRate;
let date = document.getElementById('date');
let hours = document.getElementById('hours');
let i =0;
const data = {
    date : [],
    hours : []
}

document.querySelector(".salary").addEventListener("click", function(){
    hourlyRate = parseInt(salary.value);
    hourlyRate = Math.floor((hourlyRate / 12 / 161) * 1.5);
    document.querySelector("p").insertAdjacentHTML('beforeend', '<strong>'+hourlyRate+'</strong>');
    const disabled = document.querySelectorAll(".disabled");
    for (let i = 0; i < disabled.length; i++){
        disabled[i].removeAttribute("disabled")
    }
})

document.querySelector(".Add").addEventListener("click", function(){
    data.date.push(date.value);
    data.hours.push(hours.value);  
    const addHTML = `<li><strong>${data.date[i]}</strong> You have worked ${data.hours[i]} hours</li><button class="edit">Edit</button><button class="update">Update</button><button class="delete">Delete</button>`
    document.querySelector('ul').insertAdjacentHTML('afterbegin', addHTML);
    i++;
});

// function addTotal (){
//     if(i>1){
//         console.log('has child node')
//         // const hoursSum = data.hours.reduce((el1, el2) => el1+el2)
//         const sumHTML = `<p>You\'ve worked ${data.hours} hours and this would be ${data.hours}£</p>`
//         document.querySelector('div').insertAdjacentHTML('beforeend', sumHTML);
//     }
// };
// addTotal();

document.getElementById('list').addEventListener('click', function(e) {
    const tgt = e.target;
    const parent = tgt.closest('li');

    if(tgt.classList.contains('edit')){
        console.log('edit')

    }    
    if(tgt.classList.contains('update')){
    console.log('update')
    }  
    if(tgt.classList.contains('delete')){
        console.log(tgt.closest('li'))
        tgt.parentNode.remove();
    }
});