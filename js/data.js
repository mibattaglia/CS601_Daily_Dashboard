var data = {
    current_modal_popup: 0,
    current_color: {
        name: "blue",
        color: "blue",
        off_color: "#7C7EFB",
    },

    current_date: {
        day: "",
        date: "",
        month: "",
        year: "",
    },
    calendar: {
        month: "",
        year: "",
    }
};

var color_data = [
    {
        name: 'blue',
        color_code: '#1B19CD',
        off_color_code: '#7C7EFB'
    }, {
        name: 'red',
        color_code: '#D01212',
        off_color_code: '#EEA19B'
    }, {
        name: 'purple',
        color_code: '#721D89',
        off_color_code: '#EBADFB'
    }, {
        name: 'green',
        color_code: '#158348',
        off_color_code: '#57C664'
    }, {
        name: 'orange',
        color_code: '#EE742D',
        off_color_code: '#F7A77A'
    }, {
        name: 'navy',
        color_code: '#000080',
        off_color_code: '#F77D59'
    }, {
        name: 'baby-blue',
        color_code: '#31B2FC',
        off_color_code: '#3D8DD9'
    }, {
        name: 'magenta',
        color_code: '#FF00FF',
        off_color_code: '#FCBECC'
    }, {
        name: 'lime',
        color_code: '#2ACC32',
        off_color_code: '#4FFA4F'
    }, {
        name: 'teal',
        color_code: '#2FCCB9',
        off_color_code: '#7FE7E3'
    }, {
        name: 'pink',
        color_code: '#F50D7A',
        off_color_code: '#FFB9EA'
    }, {
        name: 'black',
        color_code: '#212524',
        off_color_code: '#687E7B'
    }
];

/*this function will automatically generate dates up to a max year using two hardcoded months. it also accounts for leap years*/
function generateMonthData(maxYear) {
    var data = 
    [{
        //nov 20
        month_index: 10,
        amount_of_days: 30,
        starting_day: 0,
        year: 2020
    }, {
        //dec 20
        month_index: 11,
        amount_of_days: 31,
        starting_day: 2,
        year: 2020
     }];

     var prevMonth = data[data.length - 1];

     var nextStartingDay = (prevMonth.amount_of_days + prevMonth.starting_day) % 7;

     for(var year = 2021; year <= maxYear; year++) {
         for(var month = 0; month <= 11; month++) {
             var m = {
                 month_index: month, 
                 amount_of_days: new Date(year, month + 1, 0).getDate(), //gets amount of days in month
                 starting_day: nextStartingDay,
                 year: year
             }

             nextStartingDay = (m.amount_of_days + m.starting_day) % 7;
             data.push(m);
         }
     }

     return data;
    }

var month_data = generateMonthData(2100);