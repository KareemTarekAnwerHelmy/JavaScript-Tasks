class Clock {
    #intervalId = null;
    #hours;
    #minutes;
    #seconds;

    constructor(initialTime) {
        this.setTime(initialTime);
    }

    setTime(timeString) {
        if (!Clock.isValidTimeFormat(timeString)) {
            throw new Error('Invalid time format. Please use HH:MM:SS format (24-hour)');
        }
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        if (!Clock.isValidTime(hours, minutes, seconds)) {
            throw new Error('Invalid time values. Hours: 0-23, Minutes/Seconds: 0-59');
        }
        this.#hours = hours;
        this.#minutes = minutes;
        this.#seconds = seconds;
    }

    static isValidTimeFormat(timeString) {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(timeString);
    }

    static isValidTime(hours, minutes, seconds) {
        return hours >= 0 && hours < 24 &&
               minutes >= 0 && minutes < 60 &&
               seconds >= 0 && seconds < 60;
    }

    static formatTime(hours, minutes, seconds) {
        return [
            String(hours).padStart(2, '0'),
            String(minutes).padStart(2, '0'),
            String(seconds).padStart(2, '0'),
        ].join(':');
    }

    #tick() {
        this.#seconds++;
        if (this.#seconds === 60) {
            this.#seconds = 0;
            this.#minutes++;
        }
        if (this.#minutes === 60) {
            this.#minutes = 0;
            this.#hours++;
        }
        if (this.#hours === 24) {
            this.#hours = 0;
        }
        this.updateDisplay();
    }

    updateDisplay() {
        const clockDisplay = document.getElementById('clockDisplay');
        if (clockDisplay) {
            clockDisplay.innerText = `Current Time: ${this.getTime()}`;
        }
    }

    start() {
        if (!this.#intervalId) {
            this.#intervalId = setInterval(() => {
                try {
                    this.#tick();
                } catch (err) {
                    console.error("Error during clock update:", err);
                    this.stop();
                }
            }, 1000);
        }
    }

    stop() {
        if (this.#intervalId) {
            clearInterval(this.#intervalId);
            this.#intervalId = null;
        }
    }

    getTime() {
        return Clock.formatTime(this.#hours, this.#minutes, this.#seconds);
    }

    isRunning() {
        return this.#intervalId !== null;
    }
}

class AlarmClock extends Clock {
    #alarmTime = null;
    #onAlarm = null;
    
    constructor(initialTime, alarmTime, onAlarm = null) {
        super(initialTime);
        if (alarmTime) {
            this.setAlarm(alarmTime);
        }
        this.#onAlarm = onAlarm || this.defaultAlarmCallback;
    }

    defaultAlarmCallback() {
        const alarmMessage = document.getElementById('alarmMessage');
        if (alarmMessage) {
            alarmMessage.innerText = "Alarm! Wake up!";
        }
    }

    #checkAlarm() {
        if (this.#alarmTime && this.getTime() === this.#alarmTime) {
            this.#onAlarm();
            this.stop();
        }
    }

    setAlarm(newAlarmTime) {
        if (!Clock.isValidTimeFormat(newAlarmTime)) {
            throw new Error('Invalid alarm time format. Please use HH:MM:SS format (24-hour)');
        }
        this.#alarmTime = newAlarmTime;
        const alarmMessage = document.getElementById('alarmMessage');
        if (alarmMessage) {
            alarmMessage.innerText = `Alarm set for ${newAlarmTime}`;
        }
    }

    start() {
        if (!this.isRunning()) {
            super.start();
            const checkInterval = setInterval(() => {
                if (!this.isRunning()) {
                    clearInterval(checkInterval);
                    return;
                }
                try {
                    this.#checkAlarm();
                } catch (err) {
                    console.error("Error checking alarm:", err);
                    this.stop();
                }
            }, 1000);
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    try {
        const alarmClock = new AlarmClock("23:59:50", "00:00:10", () => {
            alert("Wake up!");
            document.getElementById('alarmMessage').innerText = "Alarm triggered!";
        });
        
        alarmClock.start();
        
        setTimeout(() => {
            try {
                alarmClock.setAlarm("00:00:15");
            } catch (err) {
                console.error("Error setting new alarm time:", err);
            }
        }, 5000);
    } catch (err) {
        console.error("Error initializing alarm clock:", err);
    }
});



