var currentDate = dayjs().format("dddd, MMMM, D") //Retrieves the current date and time
$("#currentDay").html(currentDate); //Sets the element id currentday to the value of currentDate

$(document).ready(function() { //Waits for the function to finish loading before executing the code
  $(".saveBtn").on("click", function() { //Listens for a click event and executes the function when one is detected
    var text = $(this).siblings(".description").val(); //Selects sibling elements of saveBtn and retrieves their value
    var time = $(this).parent().attr("id"); //Selects parent elements of saveBtn and retrieves its "id" value

    localStorage.setItem(time, text); //Stores the value of the "text" variable into the web browser's local storage, using the "time" variable as the key
  });

//YO the screw up might be the for loop maybe we're not translating it to parseInt correctly. Note to self.
function timeTracker(){
  var currentTime = dayjs().format('H'); //Retrieves the current hour by using the hour() function provided by dayjs

  for (var i = 8; i <= 17; i++) { //Initializes variable "i" and increments it by 1 until it reaches 17
    var hour = ".hour" + i; //Concatenates the string "#hour" with the current value of "i"
    var timeRow = parseInt($(this).attr("id").split("hour")[1]); //Retrieves the value of the id attribute then splits it into an array of substrings and converts it into an integer
  console.log(timeRow, currentTime);

  $(hour + " .description").val(localStorage.getItem("hour" + i)); //Uses the constructed hour variable to select an element with the class "description"
  

  if(timeRow < currentTime){ //Checks if the value of timeRow is less than currentTime and if so, adds a class of "past"
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  } else if(timeRow === currentTime) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  } else if (timeRow > currentTime){
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
}
}
$(".time-block").each(timeTracker);
});



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
