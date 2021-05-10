function updateDates() {
    const today = new Date();

    var date = today.getDate();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();

    data.current_date.day = day;
    data.current_date.date = date;
    data.current_date.month = month;
    data.current_date.year = year;

    data.calendar.month = month;
    data.calendar.year = year;

    document.getElementById("cur-year").innerHTML = year;
    document.getElementById("current-day").innerHTML = translateDay(day);
    document.getElementById("current-date").innerHTML = addOrdinal(date);
    document.getElementById("current-month").innerHTML = translateMonth(month);

}

function updateCalendarDates(){
    document.getElementById("cal-year").innerHTML = data.calendar.year;
    document.getElementById("cal-month").innerHTML = translateMonth(data.calendar.month);
}

function addOrdinal(date) {
    switch(date){
        case 1:
        case 21:
        case 31: return date + "<sup>st</sup>";
        case 2: 
        case 22: return date + "<sup>nd</sup>";
        case 3:
        case 23: return date + "<sup>rd</sup>";
        default: return date + "<sup>th</sup>";
    }

}

function translateDay(day) {
    switch(day){
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }

}

function translateMonth(month) {
    switch(month) {
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
    }
}

