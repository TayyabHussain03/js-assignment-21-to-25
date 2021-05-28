// **********QUESTION 1**********

// var firstName = prompt("Enter Your First Name Here")
// var lastName = prompt("Enter Your Last Name Here")
// var fullName = firstName + " " + lastName
// var greetings = alert("Welcome!" + " " + fullName)


// **********QUESTION 2**********

// var input = prompt("Ask me Your Favourite Mobile Name")
// document.write("<h3>" + "My Favourite Phone is: " + input + "<h3>")
// document.write("<h3>" + "Length of string: " + input.length + "<h3>")


// **********QUESTION 3**********

// var string = "Pakistani"
// document.write("<h3>" + "String: " + string + "<h3>")
// document.write("<h3>" + "Index of 'n': " + string.indexOf("n") + "<h3/>")


// **********QUESTION 4**********

// var string = "Hello World"
// document.write("<h3>" + "String: " + string + "<h3>")
// document.write("<h3>" + "Index of 'l': " + string.indexOf("l",5) + "<h3/>")


// **********QUESTION 5**********

// var string = "Pakistani"
// document.write("<h3>" + "String: " + string + "<h3>")
// document.write("<h3>" + "Character at index '3': " + string.charAt(3) + "<h3/>")


// **********QUESTION 6**********

// var firstName = prompt("Enter Your First Name Here")
// var lastName = prompt("Enter Your Last Name Here")
// var concat = firstName.concat(" " + lastName)
// alert(concat)


// **********QUESTION 7**********

// var name = "Hyderabad";
// var oldName = "Hyder";
// var newName = "Islam";

// var index = name.indexOf(oldName);

// if(index !== -1){
//     name = name.slice(0,index) + newName + name.slice(index + oldName.length);
//     document.write("<h3>" + "City: " + "Hyderabad" + "<h3/>")
//     document.write("<h3>" + "After Replacement: " + name + "<h3/>")
// }


// **********QUESTION 8**********

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var replace = message.replace(/and/g , "&")
// document.write(replace)


//**********QUESTION 10**********

// var input = "peanuts"
// var capitalize = input.toUpperCase()
// document.write("<h3>" + "User Input: " + input + "<h3/>")
// document.write("<h3>" + "Upper Case: " + capitalize + "<h3/>")


// **********QUESTION 9**********

// var input = prompt("Enter Any Number Here")
// var typeNumber = +input
// console.log(typeNumber)


// **********QUESTION 14**********

// var items = ["cake", "apple pie", "cookies", "chips", "patties"];
// var input = prompt("Enter Item Name Here");
// input = input.toLowerCase()
// flag = "no"
// var itemCheck = items.indexOf(input)

// for (var i = 0; i < items.length; i++) {
//     if (itemCheck !== -1) {
//         flag = "yes"
//         break
//     }
// }

// if (flag === "yes") {
//     alert(input + " is available at index " + itemCheck + " in our bakery")
// }
// else {
//     alert("Sorry " + input + " is not available in our bakery")
// }
