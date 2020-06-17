function setDate(){
    
    const secondHand = document.querySelector('.sec-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand')

    const now = new Date();
    //now.get function can be used to get any seconds and more
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees =((mins / 60)* 360) + 90;
    hourHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees =((hour / 12)* 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);

setDate();