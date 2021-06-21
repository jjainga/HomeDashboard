//setting Today's date and Month
let today = moment().format('MMMM Do YYYY');
let month = moment().format('MMMM')

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