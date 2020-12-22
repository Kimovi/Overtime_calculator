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
    hourlyRate = hourlyRate / 12 / 161;
    console.log(hourlyRate)
    document.querySelector("p").insertAdjacentHTML('beforeend', hourlyRate);
    const disabled = document.querySelectorAll(".disabled");
    for (let i = 0; i < disabled.length; i++){
        disabled[i].removeAttribute("disabled")
    }
})


document.querySelector(".Add").addEventListener("click", function(){
    data.date.push(date.value);
    data.hours.push(hours.value);  
    const addHTML = `<li><strong>${data.date[i]}</strong> You have worked ${data.hours[i]} hours</li><button>Edit</button><button>Update</button><button>Delete</button>`
    document.querySelector('ul').insertAdjacentHTML('afterbegin', addHTML);
    i++;
})
