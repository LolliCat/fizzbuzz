function fizzbuzz() {
    var userInput = 0;
    userInput = document.getElementById("user-input").value;
    var text1;
    var heading1 = document.getElementById("answer");

    for (i = userInput; i < 101; i++) {
        //if divisible by 15
        if (i == 0) continue;
        if (i % 5 == 0 && i % 3 == 0) {
         text1 = 'fizzbuzz'; 
        //if divisible by 5
        } else if (i % 5 == 0) { 
            continue;
         // text1 = 'buzz';
        //if divisible by 3
        } else if (i % 3 == 0) {
            text1 = 'fizz';
         } else {
             text1 = 'normal'
         }
         console.log(text1 + " beause the number is " + i);
         heading1.textContent += (i + " because " + text1 );
    }


//   heading1.textContent = (text1 + " beause the number is " + userInput);
    
}


