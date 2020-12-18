// Need to add Empty input validation function
// Add radiobutton to choose overtime rates 
// To fix bugs occuring at responsive design 

const salary = document.getElementById('salary1');
let hourlyRate;
let date = document.getElementById('date');
let hours = document.getElementById('hours');
const data = {
    date : [],
    hours : []
}

document.querySelector(".salary").addEventListener("click", function(){
    hourlyRate = parseInt(salary.value);
    hourlyRate = hourlyRate / 12 / 161;
    console.log(hourlyRate)
    document.querySelector("p").insertAdjacentHTML('beforeend', hourlyRate);
})

document.querySelector(".Add").addEventListener("click", function(){
    data.date.push(date.value);
    data.hours.push(hours.value);    
})