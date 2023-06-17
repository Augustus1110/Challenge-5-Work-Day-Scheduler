/* Wraps all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html */


// Gets the date using Day.js library and formats it as Day of Week, Month, Day, Year
// Appends the current date to the element with the ID "currentDay"

$(function () {
  var currentDate = dayjs().format("dddd, MMMM DD, YYYY")
  $("#currentDay").append(currentDate)

  // Calls this function which draws each time block on the page
  drawTimeBlock();
  
  // Adds an event listener to the save button that saves the text in the text area to local storage
  // Gets the value of the text area element that is a sibling of the clicked save button
  // Gets the ID of the parent element of the clicked save button

  $(".saveBtn").on("click", function(){
    var textValue = $(this).siblings(".description").val()
    var divId = $(this).parent().attr("id")

    // Stores the text value in the local storage using the divId as the key
    
    localStorage.setItem(divId, textValue)
  })

  // Retrieves the stored values from local storage and set them as the values of the corresponding text area elements

    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
});

//Array containing the objects that represent the different time blocks. The for loop below will iterate through this array and draw each time block on the page
var timeArray = [
  {
    hour: 9,
    label: "9 AM",
    id: "hour-1",
  },
  {
    hour: 10,
    label: "10 AM",
    id: "hour-2",
  },
  {
    hour: 11,
    label: "11 AM",
    id: "hour-3",
  },
  {
    hour: 12,
    label: "12 PM",
    id: "hour-4",
  },
  {
    hour: 13,
    label: "1 PM",
    id: "hour-5",
  },
  {
    hour: 14,
    label: "2 PM",
    id: "hour-6",
  },
  {
    hour: 15,
    label: "3 PM",
    id: "hour-7",
  },
  {
    hour: 16,
    label: "4 PM",
    id: "hour-8",
  },
  {
    hour: 17,
    label: "5 PM",
    id: "hour-9",
  },
];

// Function that draws each time block on the page

function drawTimeBlock() {
  // Empties the time block div so that the time blocks are not duplicated when the function is called
  $("#time-block-div").empty();
  // Gets the current hour using Day.js library
  var currentHour = dayjs().hour();

  // For loop that iterates through the timeArray and draws each time block on the page
  for (let i = 0; i < timeArray.length; i++) {
    var classToAdd = "";
    var timeObj = timeArray[i];
    // Determines the class to add to the time block based on the current hour
    if (timeObj.hour < currentHour) {
      classToAdd = "past";
    }else if (timeObj.hour === currentHour) {
      classToAdd = "present";
    }else {
      classToAdd = "future";
    }
    
    // Creates the HTML markup for a time block using template literals
    var timeBlock = $(`
    <div id="${timeObj.id}" class="row time-block ${classToAdd}">
      <div class="col-2 col-md-1 hour text-center py-3">${timeObj.label}</div>
      <textarea id="text-${timeObj.hour}" class="col-8 col-md-10 description" rows="3"> </textarea>
      <button onclick="saveTask('text-${timeObj.hour}')" class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
    `);
    $("#time-block-div").append(timeBlock); // Appends the time block to the element with the ID "time-block-div"
  }
}

// Saves a task by logging its value to the console.
function saveTask(id){
 console.log($(`#${id}`).val());
}

