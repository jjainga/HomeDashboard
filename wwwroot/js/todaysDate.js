//setting Today's date and Month
let today = moment().format('MMMM Do');
let month = moment().format('MMMM');
let year = moment().format('YYYY');

const startOfMonthDay = moment().clone().startOf('month').format('dddd'); //weekday
const startOfMonth  = moment().clone().startOf('month').format('YYYY-MM'); //current month
const daysInMonth = moment(startOfMonth, "YYYY-MM").daysInMonth(); //number of days in month
const startdate = moment().clone().startOf('month').format('D');

const startWeek = moment(month, 'MMMM').startOf('month').week();
const endWeek = moment(month, 'MMMM').endOf('month').week();


$('document').ready(function() {
    currentDay();
    currentMonth();
    calendarFunction().then((data) => {
        console.log(data);
        $('#table tr:last').after(
            data.map(obj => {
                return `
                <tr id='${obj.week}'> 
                    ${obj.days.details.map(day => {
                        return `
                        <td class='border' value='${day}'>
                            <a href='/Calendar/AddEvent?date=${moment(day._d, "MMMM Do YYYY").format("MMMM Do YYYY")}'>
                                ${moment(day._d, "D").format("D")}
                            </a>
                        </td>
                        `
                    })}
                </tr>
                `
            })
            )
        });
    })
//creating functions to add to the page
const currentDay = () => {
    $('#date').text("Today's Date: " + today);
}
//current month
const currentMonth = () => {
    $('#month').text(month);
}
//create calendar
const calendarFunction = async () => {
    let calendar = []
    for(var week = startWeek; week<=endWeek; week++){
        calendar.push({
          week:week,
          days: {
              details: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day')),
              day: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day').format('D'))
        }
    })
    }
    return await calendar;
}
// change months

const subtractMonth = () => {
    month = moment(month, 'MMMM').subtract(1, 'month').format('MMMM');
}

const addMonth = () => {
    month = moment(month,'MMMM').add(1, 'month').format('MMMM');
}