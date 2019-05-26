function timer () {
    let deadLine = '2019-07-04',
        now = Date.parse(new Date()),
        over = Date.parse(deadLine);

    if (over <= now) {
        let days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds');

        days.textContent = "00";  
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
    } else {
        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/1000/60/60) % 24),
                days = Math.floor((t/(1000*60*60*24)));

            return {
                'total' : t,
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        }

        function setClock (endTime) {
            let days = document.querySelector('#days'),
                hours = document.querySelector('#hours'),
                minutes = document.querySelector('#minutes'),
                seconds = document.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

            /*    Динамическая запись данные в верстку    */

            function updateClock() {
                let t = getTimeRemaining(endTime);
                days.textContent = appendZero(t.days);
                hours.textContent = appendZero(t.hours);
                minutes.textContent = appendZero(t.minutes);
                seconds.textContent = appendZero(t.seconds);

                if(t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        function appendZero(i) {
            if (i < 10){	
                i = "0" + i;
            }
            return i;
        }

        setClock(deadLine);
  
    }
}

module.exports = timer;