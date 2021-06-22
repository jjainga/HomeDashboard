//setting Today's date and Month
let today = moment().format('MMMM Do YYYY');
let month = moment().format('MMMM')

const startOfMonthDay = moment().clone().startOf('month').format('dddd'); //weekday
const startOfMonth  = moment().clone().startOf('month').format('YYYY-MM'); //current month
const daysInMonth = moment(startOfMonth, "YYYY-MM").daysInMonth(); //number of days in month
const startdate = moment().clone().startOf('month').format('Do');

$('document').ready(function() {
    currentDay();
    currentMonth();
    calendar(startOfMonthDay)
})
//creating functions to add to the page
const currentDay = () => {
    $('#date').text("Today's Date: " + today);
}
//current month
const currentMonth = () => {
    $('#month').text(month);
}

const calendar = (day) => {
    console.log(day);
    console.log(startdate);
    switch(day) {
        case "Sunday":
            $('td[id="0"][name="sun"]').text(startdate);
            break;
        case "Monday":
            $('td[id="0"][name="mon"]').text(startdate);
            break;
        case "Tuesday":
            console.log("poop");
            $('td[id="0"][name="tue"]').text(startdate);
            break;
        case "Wednesday":
            $('td[id="0"][name="wed"]').text(startdate);
            break;
        case "Thursday":
            $('td[id="0"][name="thu"]').text(startdate);
            break;
        case "Friday":
            $('td[id="0"][name="fri"]').text(startdate);
            break;
        case "Saturday":
            $('td[id="0"][name="sat"]').text(startdate);
            break;
    }

}