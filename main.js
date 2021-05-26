setInterval(()=> {
    myDate= new Date();
    hourTime = myDate.getHours();
    minuteTime = myDate.getMinutes();
    secondTime = myDate.getSeconds();

    hoursRotation = 30 * hourTime + minuteTime/2;
    minuteRotation = 6 * minuteTime;
    secondRotation = 6 * secondTime;

    hour.style.transform = `rotate(${hoursRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`

})