// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var currentDate = dayjs().format("dddd, MMMM DD, YYYY")
  $("#currentDay").append(currentDate)

  drawTimeBlock();
  $(".saveBtn").on("click", function(){
    var textValue = $(this).siblings(".description").val()
    var divId = $(this).parent().attr("id")

    localStorage.setItem(divId, textValue)
  })
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

function drawTimeBlock() {
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
    
    var timeBlock = $(`
    <div id="${timeObj.id}" class="row time-block ${classToAdd}">
      <div class="col-2 col-md-1 hour text-center py-3">${timeObj.label}</div>
      <textarea id="text-${timeObj.hour}" class="col-8 col-md-10 description" rows="3"> </textarea>
      <button onclick="saveTask('text-${timeObj.hour}')" class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
    `);
    $("#time-block-div").append(timeBlock);
  }
}

function saveTask(id){
 console.log($(`#${id}`).val());
}