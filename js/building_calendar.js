function fillInCalendar() {
    updateCalendarDates();

    var monthToFill = {};
    var previousMonthIndex;

    month_data.forEach(function(month, i) {
        if(month.year == data.calendar.year && month.month_index == data.calendar.month) {
            monthToFill = month;
            previousMonthIndex = i - 1;
            return;
        }
    });


    var days = document.getElementsByTagName("td");
    var currentMonthCount = 1;
    var previousMonthCount = month_data[previousMonthIndex].amount_of_days - monthToFill.starting_day + 1;
    var nextMonthCount = 1;
   
    cleanCells(days);


    for(var i = 0; i < days.length; i++) {
        //filling current month
        if(monthToFill.starting_day <= i && currentMonthCount <= monthToFill.amount_of_days) {
            days[i].innerHTML = currentMonthCount;
            uid = getUID(monthToFill.month_index, monthToFill.year, currentMonthCount);
            days[i].setAttribute("data-id", uid);

            if (currentMonthCount == data.current_date.date && isCurrentMonth()) {
                days[i].setAttribute("id", "current-day");
            }

            currentMonthCount++;

        //filling previous month
        } else if(currentMonthCount <= monthToFill.amount_of_days) {
            days[i].classList.add("color");
            days[i].innerHTML = previousMonthCount;
            uid = getUID(month_data[previousMonthIndex].month_index, month_data[previousMonthIndex].year, previousMonthCount);
            days[i].setAttribute("data-id", uid);

            previousMonthCount++;

        //filling next month
        } else {
            days[i].classList.add("color");
            days[i].innerHTML = nextMonthCount;
            uid = getUID(monthToFill.month_index + 1, monthToFill.year, nextMonthCount);

            nextMonthCount++;
        }
    }

    changeColor();
}

//adds a unique identifier to each day with a month index, year index, and day index
function getUID(month, year, day) {

    //if last month, reset month index to 0 and increment year
    if(month == 12) {
        month = 0;
        year++;
    }

    return month.toString() + year.toString() + day.toString();
}

//removes extra coloring on cells when months change
function cleanCells(cells) {
    removeCurrentDay();
    for(var i = 0; i < cells.length; i++) {
        if(cells[i].classList.contains("color")) {
            cells[i].classList.remove("color");
        }

        if(cells[i].hasAttribute("style")) {
            cells[i].removeAttribute("style");
        }
    }
}

function removeCurrentDay() {
    if(document.getElementById("current-day")) {
        document.getElementById("current-day").removeAttribute("id");
    }

}

function isCurrentMonth() {
    if(data.current_date.year == data.calendar.year && data.current_date.month == data.calendar.month) {
        return true;
    } else {
        return false;
    }
}

//calendar navigation function below

function nextMonth() {
    if (data.calendar.month != 11 || data.calendar.year != month_data[month_data.length - 1].year) {
        data.calendar.month++;
    }
    if (data.calendar.month >= 12) {
        data.calendar.month = 0;
        data.calendar.year++;
    }
    fillInCalendar();
}

function previousMonth() {
    if (data.calendar.month != 11 || data.calendar.year != month_data[0].year) {
        data.calendar.month--;
    }
    if (data.calendar.month <= -1) {
        data.calendar.month = 11;
        data.calendar.year--;
    }
    fillInCalendar();
}

document.onkeydown = function(e) {
    switch(e.keyCode) {
        case 37: previousMonth();
        break;
        case 39: nextMonth();
        break;
    }
}
