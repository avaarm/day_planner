

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











// Color change in the text that is linked to the current time to the different IDs
// past, present, future ( code block is the {} brackets) (changed i++ to i = i+ 100)
function colorGenerator () {
    for (i = 0900; i < 1800; i = i + 100) {
        if (i === 900) {
            var timeBlock = document.getElementById("0" + i); 
            console.log(timeBlock);
        }
        // console.log(i);
        var timeBlock = document.getElementById(i);
        console.log(timeBlock);

    
    }
}
colorGenerator();


if ($("input-group").attr('id') = moment().format(HHOO))



else if ($("input-group").attr('id') < moment().format(HHOO));


else ($("input-group").attr('id') < moment().format(HHOO))


// target them and compare the ID against the current time, create an If statement that says if is current time add this class 



// // jquery has a way to target sibling elements 

// $('.btn').on('click', function() {
//     console.log("hello");
    
    
//     // $(this).siblings("input").val();
//     // console.log((this).siblings("input").val());

//     $('input[type="text"]').each(function(){ 
        
//         var className = $(this).attr('class');
//         var value = $(this).val();
//        localStorage.setItem(className, value);
//         console.log(className);  
//         console.log(value);
//     });   
// });
