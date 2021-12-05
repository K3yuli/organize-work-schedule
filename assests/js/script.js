// the current day is displayed at the top of the calendar
var dt = new Date();
document.getElementById("currentDay").innerHTML = (("0" + dt.getDate()).slice(-2)) + "." + (("0" + (dt.getMonth()+1)).slice(-2)) + "." + (dt.getUTCFullYear()) + " " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0"+ dt.getMinutes()).slice(-2));

// when i scroll down
// then i am presented with time blocks for standard business hrs



// when i view the time blocks for that day
// then each time block is color-coded ti indicate whether it is in the
// past, present, or future



// when i click into a time block
// then i can enter an event
// $(".description").on("click", "textarea", function() {
// console.log("<textarea> was clicked");
// });

// when i click the save button for that time block
// then the text for that event is saved in local storage
// $(".saveBtn").on("click", function() {
//     console.log(this);
//     var text = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");
    
//     localStorage.setItem(time, text);
    
// });

// when i refresh the page
// then the saved events persist