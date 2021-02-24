const hours = document.querySelector(".hour")
const minutes = document.querySelector(".minute")
const seconds = document.querySelector(".second")
const times = document.querySelector(".time")
const dates = document.querySelector(".date")
const toogles = document.querySelector(".toogle")

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toogles.addEventListener("click", (e)=>{

    const html = document.querySelector('html')
    html.classList.toggle("dark")
    if(html.classList.contains('dark')){
        e.target.innerText = "Light Mode"
    }else{
        e.target.innerText = "Dark Mode"
    }
})

function setTime(){
    const time = new Date();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const hour12  = hour % 12;
    const month = time.getMonth();
    const ampm = hours >= 12 ? 'PM' : 'AM' 

    hours.style.transform = `translate(-50%, -100%) rotate(${scale(hour12, 0, 11, 0, 360)}deg)`
    // hours.style.transform = `translate(-50%, -100%) rotate(${scale(hour12, 1, 12, 0, 360)}deg)`
    minutes.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    seconds.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`
   
    times.innerHTML = `${hour12}:${minute < 10 ? `0${minute}` : minute} ${ampm}`

    dates.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`

}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
setTime()

setInterval(setTime, 500)
