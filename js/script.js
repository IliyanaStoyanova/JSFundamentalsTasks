/* 1 task */
const form = document.querySelector('form[name=numberForm]');
const resultField = document.querySelector('div.result');

if(form !== null) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstNumber = parseInt(form.querySelector('input.firstNumber').value);
        const secondNumber = parseInt(form.querySelector('input.secondNumber').value);

        const result = Math.max(firstNumber, secondNumber);
        
        resultField.innerHTML = "Larger number is " + result;
    });
}

/* 2 task */
const formArray = document.querySelector('form[name=arrayForm]');
let arrNumber = [];
const sumElements = (total, num) => {
    return total + num;
}

if(formArray !== null) {
    formArray.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstNumber = parseInt(formArray.querySelector('input.firstNumber').value);
        const secondNumber = parseInt(formArray.querySelector('input.secondNumber').value);
        const thirdNumber = parseInt(formArray.querySelector('input.thirdNumber').value);

        arrNumber.push(firstNumber, secondNumber, thirdNumber);

        const resultArray = arrNumber.reduce(sumElements);

        resultField.innerHTML = "Sum is " + resultArray;
    });
}

/* 3 task */
function reverseNumber (num) {
    return (parseFloat(num.toString().split("").reverse().join("") )* Math.sign(num));
}
console.log("This is reverse number: " + reverseNumber(2456000));

/* 4 task */
function factors (num) {
    let arrFactors = [];

    for(let i=1; i<=num; i++) {
        if(num%i === 0){
            arrFactors.push(i);
        }
    }
    return arrFactors;
}
console.log("This is factors of a positive integer: " + factors(12));

/* 5 task */
function swapPairs (num) {
    let arrPairs = [];
    let str = num.toString();
    for(let i=0; i<str.length-1; i+=2){
        arrPairs.push(str[i+1], str[i]);
    }
    return arrPairs.join('');
}
console.log("This is swap pairs of adjacent digits: " + swapPairs(148765));

/* 6 task */
function largestNumber (firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber){
    let largest = firstNumber;
    if(secondNumber > largest) {
        largest = secondNumber;
    }
    if(thirdNumber > largest) {
        largest = thirdNumber;
    }
    if(fourthNumber > largest) {
        largest = fourthNumber;
    }
    if(fifthNumber > largest) {
        largest = fifthNumber;
    }
    
    return largest;
}
alert("Largest Number is " + largestNumber(3, 56, 12, 7));

/* 7 task */
function joinElements(myColor) {
    console.log(myColor.join());
    console.log(myColor.join("+"));
}
joinElements(["Red", "Green", "White", "Black"]);

/* 8 task */
function checkIsArray(item) {
    return Array.isArray(item);
}
console.log("Is this an array: " + checkIsArray([3, 4, 5, 7]));

/* 9 task */
function gcd (num1, num2) {
    let n = 0;
    while(num2) {
        n = num2;
        num2 = num1 % num2;
        num1 = n;
    }
    return num1;
}
console.log("GCD is: " + gcd(8, 12));

/* 10 task */
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
console.log("All properties: " + Object.keys(student));


/* 11 task */
function spaces (str) {
    return str.trim();
}
console.log("Strip leading and trailing spaces: " + spaces("    Spaces   "));

/* 12 task */
function removeString(searchStr) {
    const str = "Remove the first occurrence of a given 'search string' from a string";
    return str.replace(searchStr, "");
 }
 console.log("Remove the first string: " + removeString("string"));
 
 /* 13 task */
 function findWord(searchStr) {
     const str = "Find a word within a string.";
     return str.indexOf(searchStr);
 
 }
 console.log("Find a word within a string: " + findWord("within"));
 
 /* 14 task */
 function removeTags(str) {
     return str.replace(/<[^>]*>/g, '');
 }
 console.log(removeTags('<p><strong><em>PHP Exercises</em></strong></p>'));
 
 
/* 15 task */
function lastString (str, searchStr) {
    let lastIndex = str.lastIndexOf(searchStr);
    let lengthStr = searchStr.length + lastIndex;
    return (lastIndex !== -1 && lengthStr === str.length) ? true : false;
}
console.log("String ends: " + lastString("String ends with a specified string", "string"));

/* 16 task */
function sizeObject () {
    let student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12
    };
    return Object.keys(student).length;
 } 
console.log("Size of object : " + sizeObject());

/* 17 task */
function getElementArray(arr, countElem = 1) {
    if(countElem < 0) {
        return [];
    }
    return (countElem === 1) ? arr[0] : arr.slice(0, countElem);
}
console.log(getElementArray([7, 9, 0, -2]));
console.log(getElementArray([],3));
console.log(getElementArray([7, 9, 0, -2],3));
console.log(getElementArray([7, 9, 0, -2],6));
console.log(getElementArray([7, 9, 0, -2],-3));