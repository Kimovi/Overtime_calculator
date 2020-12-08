// Need to add Empty input validation function

const salary = document.getElementById('salary1');
let hourlyRate;
let date = document.getElementById('date');
let hours = document.getElementById('hours');

document.querySelector(".salary").addEventListener("click", function(){
    hourlyRate = parseInt(salary.value);
    hourlyRate = hourlyRate / 12 / 161;
    console.log(hourlyRate)
    document.querySelector("p").insertAdjacentHTML('beforeend', hourlyRate);
})

document.querySelector(".Add").addEventListener("click", function(){
    console.log(date.value, hours.value);

})