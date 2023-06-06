// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  drawTimeBlock();
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
});

var timeArray = [
  {
    hour: 9,
    label: "9 AM",
    id: "hou-1",
  },
  {
    hour: 10,
    label: "10 AM",
    id: "hou-2",
  },
  {
    hour: 11,
    label: "11 AM",
    id: "hou-3",
  },
  {
    hour: 12,
    label: "12 PM",
    id: "hou-4",
  },
  {
    hour: 13,
    label: "1 PM",
    id: "hou-5",
  },
  {
    hour: 14,
    label: "2 PM",
    id: "hou-6",
  },
  {
    hour: 15,
    label: "3 PM",
    id: "hou-7",
  },
  {
    hour: 16,
    label: "4 PM",
    id: "hou-8",
  },
  {
    hour: 17,
    label: "5 PM",
    id: "hou-9",
  },
];

function drawTimeBlock() {
  /*var timeBlock = $("<div>").addClass("time-block");
  var hour = $("<div>").addClass("hour");
  var description = $("<textarea>").addClass("description");
  var saveBtn = $("<button>").addClass("saveBtn");
  var saveIcon = $("<i>").addClass("fas fa-save");

  timeBlock.append(hour, description, saveBtn);
  saveBtn.append(saveIcon);
  return timeBlock;*/

  $("#time-block-div").empty();
  var currentHour = dayjs().hour();

  for (let i = 0; i < timeArray.length; i++) {
    var classToAdd = "";
    var timeObj = timeArray[i];
    if (timeObj.hour < currentHour) {
      classToAdd = "past";
    }else if (timeObj.hour === currentHour) {
      classToAdd = "present";
    }else {
      classToAdd = "future";
    }
    
    var timeBlock = `
    <div id="${timeObj.id}" class="row time-block ${classToAdd}">
      <div class="col-2 col-md-1 hour text-center py-3">${timeObj.label}</div>
      <textarea id="text-${timeObj.hour}" class="col-8 col-md-10 description" rows="3"> </textarea>
      <button onclick="saveTask('text-${timeObj.hour}')" class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
    `;
    $("#time-block-div").append(timeBlock);
  }
}


function saveTask(id){
 console.log($('#'+id).val());
}