

// the current day is displayed at the top of the calendar
var dt = new Date();
document.getElementById("currentDay").innerHTML = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth()+1)).slice(-2)) + "." + (dt.getUTCFullYear()) + " " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0"+ dt.getMinutes()).slice(-2));


// when i view the time blocks for that day
// then each time block is color-coded to indicate whether it is in the
// past, present, or future


// when i click the save button for that time block
// then the text for that event is saved in local storage
var buttonEl = document.querySelector("#saveButton");

buttonEl.addEventListener("click", function() {
    console.log("button clicked");

});


// when i refresh the page
// then the saved events persist