let countDawnDate = new Date("Dec 31, 2021 19:37:25").getTime();

let x = setInterval(function(){

    let now = new Date().getTime();
    let distance = countDawnDate - now;

    let days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = `
        <div class="timer">
            <div class="time">
            ${days}
            </div>Days
            </div>

            <div class="timer">
            <div class="time">
            ${hours}
            </div>Hours
            </div>

            <div class="timer">
            <div class="time">
            ${minutes}
            </div>Minutes
            </div>

            <div class="timer">
            <div class="time">
            ${seconds}
            </div>Seconds
        </div>
    `
    if(distance < 0){
        countDawnDate = new Date("Dec 31, 2022 19:37:25").getTime()
    }

},1000);



/**/