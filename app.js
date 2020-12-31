// Need to add Empty input validation function
// Add radiobutton to choose overtime rates 
// To fix bugs occuring at responsive design 

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
    console.log(hourlyRate)
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
//     if(data.hours.length >= 1){
//         console.log('has child node')
//         const hoursSum = data.hours.reduce((el1, el2) => el1+el2)
//         const sumHTML = `<p>You\'ve worked ${hoursSum} hours and this would be ${hoursSum*20}£</p>`
//         document.querySelector('.main').insertAdjacentHTML('beforeend', sumHTML);
//     }
// };
// addTotal();

document.getElementById('list').addEventListener('click', function(e) {
    const tgt = e.target;
    const parent = tgt.closest('li');
    // const japanese = parent.querySelector(".card-title")
    // const english = parent.querySelector(".card-text")
    
    if (tgt.classList.contains('delete')) parent.remove();
})
    //     else if (tgt.classList.contains('edit')) {
    //         japanese.removeAttribute('disabled');        
    //         english.removeAttribute('disabled');
    //         japanese.style.border = "1px solid rgb(224, 140, 154)";
    //         english.style.border = "1px solid rgb(224, 140, 154)";
    //     }
    //     else if (tgt.classList.contains('update')) {
    //         japanese.setAttribute("disabled",'disabled');
    //         english.setAttribute("disabled",'disabled');
    //         japanese.style.border="none";
    //         english.style.border="none";
    //     }
