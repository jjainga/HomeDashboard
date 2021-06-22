//setting Today's date and Month
let today = moment().format('MMMM Do YYYY');
let month = moment().format('MMMM')

const startOfMonth = moment().clone().startOf('month').format('dddd');
const endOfMonth   = moment().clone().endOf('month').format('YYYY-MM-DD hh:mm');

console.log(startOfMonth);

$('document').ready(function() {
    currentDay();
    currentMonth();
})
//creating functions to add to the page
let currentDay = () => {
    $('#date').text("Today's Date: " + today);
}

let currentMonth = () =>{
    $('#month').text(month);
}