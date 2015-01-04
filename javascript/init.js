/**
 * Created by Rick on 06/12/2014.
 */

/* function to bring correct assignment into the foreground and hide the rest */
zIndex = function (assignment) {
    if (assignment == 1) {
        document.getElementById("assignment1").style.zIndex = "1";
        document.getElementById("assignment2").style.zIndex = "-1";
        document.getElementById("assignment3").style.zIndex = "-1";
    } else if (assignment == 2) {
        document.getElementById("assignment2").style.zIndex = "1";
        document.getElementById("assignment1").style.zIndex = "-1";
        document.getElementById("assignment3").style.zIndex = "-1";
    } else if (assignment == 3) {
        document.getElementById("assignment3").style.zIndex = "1";
        document.getElementById("assignment1").style.zIndex = "-1";
        document.getElementById("assignment2").style.zIndex = "-1";
    }
    return;
};

/* function to reset to the default values for all 3 assignment pages */
reset = function () {
    document.getElementById("input1").innerHTML = 1000;
    document.getElementById("input2").innerHTML = 4000000;
    document.getElementById("input3").innerHTML = 600851475143;
    document.getElementById("result1").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
};

/* function to calculate the sum of all multiples of 3 and 5 below a given number. */
multiples = function () {
    var countHits = 0;
    var upperLimitToTest = document.getElementById("input1").innerHTML; // get a reference, and fetch user input.
    if (upperLimitToTest >= 1000000) {                                 // test input for valid range.
        alert("Please input a value less than 1,000,000");
        reset();
        return;
    }
    for (var i = 0; i < upperLimitToTest; i++) {        // find the multiples and sum them.
        if (i % 3 === 0 || i % 5 === 0) {
            countHits += i;
        }
    }
    var result1 = document.getElementById("result1");    // get a reference to output answer field.
    result1.innerHTML = countHits.toString();            // display the answer.
    return;
};

/* function to find the sum of the even numbered terms in a Fibonacci sequence  */
function evenFibonacci() {
    var evenFibs = 2;
    var valueOne = 1;
    var valueTwo = 2;
    var valueNext;
    document.getElementById("result2").innerHTML = " ";             // get reference to user input field.
    var maxValue = document.getElementById("input2").innerHTML;     // get the user's input.
    if (maxValue >= 10000000000000) {                               // test if input in acceptable range.
        alert("Please input a value less than 10,000,000,000,000");
        reset();
        return;
    }
    while (true) {                                       // find the sum of even numbered terms.
        valueNext = valueOne + valueTwo;
        if (valueNext % 2 === 0) {
            evenFibs += valueNext;
        }
        if (valueNext >= maxValue) {
            break;
        }
        valueOne = valueTwo;
        valueTwo = valueNext;
    }
    var result2 = document.getElementById("result2");    // get a reference to answer field.
    result2.innerHTML = evenFibs.toString();             // display the answer.
    return;
}

/* function to solve for the largest prime factor of a given number.  */
function solveForLargestPrimeFactor() {
    var results = new Array();                                           // array to hold each found prime factor.
    var divisor = 2;
    var numberUnderTest = document.getElementById("input3").innerHTML;   // get user input.
    if (numberUnderTest >= 1000000000000) {                             // test if input in acceptable range.
        alert("Please input a value less than 1,000,000,000,000");
        reset();
        return;
    }
    /* special case of divisor of 2 or 3 */
    while (numberUnderTest > 1 && divisor < 3) {
        while (numberUnderTest % divisor == 0) {
            results.push(divisor);
            numberUnderTest /= divisor;
        }
        divisor = divisor + 1;         // increment divisor by 1
    }
    if (divisor * divisor > numberUnderTest) {
        if (numberUnderTest > 1) {
            results.push(numberUnderTest);
        }
    }
    /* after having divided by 2 and 3 now use just odd numbered divisors */
    else {
        while (numberUnderTest > 1) {
            while (numberUnderTest % divisor == 0) {
                results.push(divisor);
                numberUnderTest /= divisor;
            }
            divisor = divisor + 2;     // increment divisor by 2
        }
        if (divisor * divisor > numberUnderTest) {
            if (numberUnderTest > 1) {
                results.push(numberUnderTest);
            }
        }
    }
    var result3 = document.getElementById("result3");             // get a reference to answer field.
    result3.innerHTML = Math.max.apply(Math, results).toString(); // display the answer.
    return;
}

/* function init() is called to initialize the javascript for the HTML page. */
var init = function () {
    if (!document.getElementById) {       // test browser support, exit on fail.
        zIndex(1);
        alert("Your browser does not support this content");
        return;
    } else {
        zIndex(1);                         // set to display assignment #1.
    }
};
