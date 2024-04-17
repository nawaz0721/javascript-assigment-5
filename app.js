// Given the array numbers = [1, 2, 3, 4, 5], use the splice method to remove the second element (2) from the array
console.log("Question number 1");
array = [1 , 2 , 3 , 4 , 5];
console.log(array);
array.splice(1,1);
//console.log("splice method to remove the second element (2) " );
console.log(array);

//Using the array fruits = ["apple", "banana", "orange", "kiwi", "grape"], use the splice method to replace "orange" and "kiwi" with "strawberry" and "pineapple"
console.log("Question number 2");
fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log(fruits);
fruits.splice(2,2, 'strawberry' , 'pinapple');
//console.log("splice method to replace 'orange' and 'kiwi' with 'strawberry' and 'pineapple' ");
console.log(fruits);

//Given the array colors = ["red", "green", "blue", "yellow", "purple"], use the slice method to create a new array containing only "green" and "blue"
console.log("Question number 3");
colors = ["red", "green", "blue", "yellow", "purple"]
console.log(colors);
newColor = colors.slice(1,3);
console.log(newColor);

//Using the array numbers = [10, 20, 30, 40, 50], use the slice method to create a new array containing the last three elements
console.log("Question number 4");
numbers = [10, 20, 30, 40, 50];
console.log(numbers);
newNumber = numbers.slice(2,5);
console.log(newNumber);

//Create an array called grades with five test scores. Use a for loop to find and print the lowest grade in the array.
console.log("Question number 5");
var grades = [20 , 44 , 31 , 8 , 10];
var lowestGrade = grades[0];

for(i = 0; i < grades.length ; i++){
    if(grades[i] < lowestGrade){
        lowestGrade = grades[i];
    }
}
console.log(lowestGrade);

//Using the array numbers = [3, 6, 9, 12, 15], use a for loop to calculate and print the sum of the array's elements
console.log("Question number 6");
numbers = [3, 6, 9, 12, 15]
var num = 0

for(i = 0; i < numbers.length; i++){
    num += numbers[i]
}
console.log(num);

//Create an array called colors with various color names. Use a for loop to print each color on a separate line
console.log("Question number 7");
colorNames = ['Red' , 'Blue' , 'Orange' , 'Black' , 'Green' , 'White'];

for(i = 0; i < colorNames.length; i++){
    console.log(colorNames[i]);
}

//Given the array prices = [25, 30, 15, 10, 50], use a for loop to find and print the index of the highest price
console.log("Question number 8");
var prices = [25, 30, 15, 10, 50];
var highestPricesIndex = 0;   

for(i = 0; i < prices.length ; i++){
    if(prices[i] > highestPricesIndex){
        highestPricesIndex = i;
    }
}
console.log("Index of the highest price is: " + highestPricesIndex);

//Using the array words = ["cat", "dog", "elephant", "giraffe", "lion"], use a for loop to create a new array called pluralWords containing the plural form of each word.
console.log("Question number 9");
words = ["cat", "dog", "elephant", "giraffe", "lion"];
console.log(words);
pluralWords = [];

for(i = 0; i < words.length; i++){
    word = words[i] + "s";
    pluralWords.push(word);
}
console.log(pluralWords);

//Given the array fruits = ["apple", "banana", "cherry", "date", "fig"], use the slice method to create a new array containing only "cherry" and "date".
console.log("Question number 10");
fruits = ["apple", "banana", "cherry", "date", "fig"]
console.log(fruits);
fruit = fruits.slice(2,4);
console.log(fruit);

//Given the array temperatures = [72, 78, 82, 88, 95], use a for loop to find and print the number of days with temperatures above 80.
console.log("Question number 11");
var temperatures = [72, 78, 82, 88, 95];
console.log(temperatures);
var temp = []

for(i = 0; i < temperatures.length; i++){
    if(temperatures[i] > 80){
        temp.push(temperatures[i]);
    }
}
console.log("Number of days with temperatures above 80 is " + temp.length);

//Given the array numbers = [5, 10, 15, 20, 25], use the splice method to insert the number 12 between 10 and 15
console.log("Question number 12");
numbers = [5, 10, 15, 20, 25]
console.log(numbers);
numbers.splice(2,0,12);
console.log(numbers);

//Create an array called words with different words. Use a for loop and the splice method to remove words that contain more than five letters.
console.log("Question number 13")

var friend = ['ahmed' , 'ali' , 'shujaat' , 'rameez']

for(var i = 0; i < friend.length; i++){
    if(friend[i].length < 5 ){
        friend.splice(i,1)
    }
}
console.log(friend);

//Using the array numbers = [5, 10, 15, 20, 25], use the splice method and prompt to insert a number at an index provided by the user.
console.log("Question number 14");

num = [5, 10, 15, 20, 25];
console.log(num);

//var index = +prompt("Enter the index where you want number");
//var number = + prompt("Enter the number you want to add array");

index = 2;
number = 55;

num.splice(index , 0 , number);
console.log(num);

//Using the array values = [5, 10, 15, 20, 25], ask the user to enter a number. Use a for loop and the slice method to create a new array containing only the values less than the user's input.
console.log("Question number 15");

values = [5, 10, 15, 20, 25];
var numb = + prompt("Enter  the number");
newValues = [];

for(i = 0 ; i < values.length; i++){
    if(values[i] < numb){
        newValues.push(values[i])
    }
}
console.log(newValues);
