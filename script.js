var currentDate = dayjs().format("dddd, MMMM, D") //Retrieves the current date and time
$("#currentDay").html(currentDate); //Sets the element id currentday to the value of currentDate

$(document).ready(function() { //Waits for the function to finish loading before executing the code
  $(".saveBtn").on("click", function() { //Listens for a click event and executes the function when one is detected
    var text = $(this).siblings(".description").val(); //Selects sibling elements of saveBtn and retrieves their value
    var time = $(this).parent().attr("id"); //Selects parent elements of saveBtn and retrieves its "id" value

    localStorage.setItem(time, text); //Stores the value of the "text" variable into the web browser's local storage, using the "time" variable as the key
  });

function timeTracker(){
  var currentTime = dayjs().format('H'); //Retrieves the current hour by using the hour() function provided by dayjs
  var timeRow = parseInt($(this).attr("id").split("hour")[1]); //Retrieves the value of the id attribute then splits it into an array of substrings and converts it into an integer
  console.log(timeRow, currentTime); //Logs the timeRow and currentTime to check if they are working properly
  
  for (var i = 8; i < 18; i++) { //Initializes variable "i" and increments it by 1 until it reaches 17
    var hour = "#hour" + i; //Concatenates the string "#hour" with the current value of "i"
    $(hour + ".description").val(localStorage.getItem(hour)); //Uses the constructed hour variable to select an element with the class "description"

  if(timeRow < currentTime){ //Checks if the value of timeRow is less than currentTime and if so, adds a class of "past"
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  } else if(timeRow === currentTime) { //Checks if the value of timeRow is the same as currentTime and adds a class of present if true
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  } else if (timeRow > currentTime){ //Checks if the value of timeRow is greater than timeRow and adds a class of future if true
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
}
}
$(".time-block").each(timeTracker);
});