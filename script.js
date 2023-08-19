const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('mouseover', () =>{
        removeFocus();
        item.classList.add('expand');
    })
})

removeFocus = () => {
    items.forEach (item => {
        item.classList.remove('expand');
    })
}

function openingCountDown() {
    const openingDate = new Date('September 10, 2023 12:00');
    const now = new Date();
    const difference = openingDate - now;


    const msInSeconds = 1000;
    const msInMinutes = 60 * 1000; 
    const msInHours = 60 * 60 * 1000; 
    const msInDays = 24 * 60 * 60 * 1000; 

    const displayDay = Math.floor(difference / msInDays);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor(difference % msInDays / msInHours);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor(difference % msInHours / msInMinutes);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor(difference % msInMinutes / msInSeconds);
    document.querySelector('.seconds').textContent = displaySecond;

    if (difference <= 0) {   
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID); 
        weAreOpen(); 
}
}

function weAreOpen() {
    const heading = document.querySelector('h1');
    heading.textContent = 'We are finally open!!!';
    heading.classList.add('change');
}

let timerID = setInterval(openingCountDown, 1000); 
