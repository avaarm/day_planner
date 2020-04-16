

// Displaying the time using moment 
var currentDayValue = moment().format("dddd, MMMM Do YYYY");
console.log(currentDayValue);

// grabbed the element that we want to append to the <header> 
var jumbotronEl = document.querySelector(".jumbotron");

// create the element
var pEl = document.createElement("p");

pEl.innerText = (moment().format("dddd, MMMM Do YYYY"));

// append to class jumbotron 

jumbotronEl.appendChild(pEl);


// Input Box color changes 

var currentTime = moment().format('LT');
var currentHour = currentTime.split(":")[0];

var isAM = "AM" === currentTime.split(":")[1][3] + currentTime.split(":")[1][4];
var isPM = "PM" === currentTime.split(":")[1][3] + currentTime.split(":")[1][4];
var shouldRunFunciton = true;


var ids = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

if (isAM && ( currentHour < 9 || currentHour === 12)) {
  shouldRunFunciton = false
  for(i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).style.backgroundColor = "green";
  }
}

if (isPM && ( currentHour > 5 )) {
  shouldRunFunciton = false
  for(i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).style.backgroundColor = "gray";
  }
}





function setCSS(currentHour){

    if (currentHour <= 5 && currentHour >= 1){ // if currentHour in between (inclusive) 1 and 5
        for(i = 9; i <= 12; i++){ // that means 9 - 12 in the past
          document.getElementById(i).style.backgroundColor = "gray";
        }
          for(j = 1; j <= 5; j++) {
          if(j < currentHour) { // loop through and check the rest
            document.getElementById(j).style.backgroundColor = "gray";
          } else if (j > currentHour) {
            document.getElementById(j).style.backgroundColor = "green";
          }
        }
    }

    if (currentHour <= 12 && currentHour >= 9) { //if currentHour in between (inclusive) 9 and 12
        for(i = 1; i <= 5; i++){  // that means  1- 5 in the future
          document.getElementById(i).style.backgroundColor = "green";
        }
          for(j = 9; j <= 12; j++) { // check the rest
          if(j < currentHour) {
            document.getElementById(j).style.backgroundColor = "gray";
          } else if (j > currentHour) {
            document.getElementById(j).style.backgroundColor = "green";
          }
        }
    }
    
}

if (shouldRunFunciton) {
setCSS(currentHour);
document.getElementById(currentHour).style.backgroundColor = "red";

}









//Alternative option 
// Color change in the text that is linked to the current time to the different IDs
// past, present, future ( code block is the {} brackets) (changed i++ to i = i+ 100)
// function colorGenerator () {
//     for (i = 0900; i < 1800; i = i + 100) {
//         if (i === 900) {
//             var timeBlock = document.getElementById("0" + i); 
//             console.log(timeBlock);
//         }
//         // console.log(i);
//         var timeBlock = document.getElementById(i);
//         console.log(timeBlock);
//     }
// }
// colorGenerator();




// Saving text upon a button click 
// checking localStorage to see if there is a value of 8 
$('#9').val(localStorage.getItem('9'));
$('#10').val(localStorage.getItem('10'));
$('#11').val(localStorage.getItem('11'));
$('#12').val(localStorage.getItem('12'));
$('#1').val(localStorage.getItem('1'));
$('#2').val(localStorage.getItem('2'));
$('#3').val(localStorage.getItem('3'));
$('#4').val(localStorage.getItem('4'));
$('#5').val(localStorage.getItem('5'));



$('.btn').on('click', function() {
  
    $('input[type="text"]').each(function(){ 
        
        var className = $(this).attr('id');
        var value = $(this).val(); // using val() to get the value out of a user input
        console.log(className);  
        console.log(value); 
        localStorage.setItem(className, value);
    });   
});


// using the ID because it's unique to each input box (class was wrong)
// check the application in the browser for local storage 