function start() {
    updateDates();
    updateCalendarDates();
    changeColor();
    fillInCalendar();
}

window.addEventListener('DOMContentLoaded', (event) => {
    start();
});


class Start {
    constructor(cmd) {
        this.cmd = cmd;
    }

    go() {
        if (String(cmd).includes("go")) {
            return true;
        } else {
            return false;
        }
    }
}

let cmd = new Start("go");
console.log(cmd.go());