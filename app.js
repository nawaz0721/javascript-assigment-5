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
//prices = [25, 30, 15, 10, 50];
console.log(" '-----??-----' ");

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
//temperatures = [72, 78, 82, 88, 95]
console.log(" '-----??-----' ");

//
console.log("Question number 12");
