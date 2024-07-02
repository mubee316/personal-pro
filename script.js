// const date = document.getElementById("date")
// const time = new Date()
// date.textContent = `${time}`;

function getTime(){
    const time  = new Date()
    let hour = time.getHours().toString().padStart(2, 0)
    const meridian = hour >= 12 ? "PM" : "AM"
    const minute = time.getMinutes().toString().padStart(2, 0)
    const seconds = time.getSeconds().toString().padStart(2, 0)
    const day = time.getUTCDay()
    const updateTime = `${hour}:${minute}:${seconds} ${meridian}`
    document.getElementById("digital").textContent = updateTime
}

getTime();
setInterval(getTime, 1000)
function getDay(){
    const day= new Date()
    const days = ["Sunday", "Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];
    const dayOfWeek = days[day.getDay()];
    const updateDay = `${dayOfWeek}`

    document.getElementById("day").textContent = updateDay

}
getDay();
setInterval(getDay, 1000)

document.getElementById("scrollAbout").addEventListener("click", function (){
    document.getElementById("targetAbout").scrollIntoView({behavior: 'smooth' })
})
document.getElementById("scrollVision").addEventListener("click", function (){
    document.getElementById("targetVision").scrollIntoView({behavior: 'smooth' })
})
document.getElementById("scrollContact").addEventListener("click", function (){
    document.getElementById("targetContact").scrollIntoView({behavior: 'smooth' })
})
document.getElementById("scrollInfo").addEventListener("click", function (){
    document.getElementById("targetContact").scrollIntoView({behavior:'smooth' })
})