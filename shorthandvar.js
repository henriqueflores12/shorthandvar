/* 1-variable are declared and vlaues assigned in the same statement */
var price = 5;
var quantity = 14;
var total = price * quantity;
/*2-three variable are declered on the same line,then values assigned to each*/
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
/*3-two variable are declared and assigned values on the same line.then one is declared and the assigned a value on the next line.
the third code example shows two numbers,but you can declare variables that hold diferent types of data on the same line ,e.g., a string and a number.*/
var price = 5,
  quantity = 14;
var total = price * quantity;
/*4-here,a variable is used to hold a refence to an element in the html page. this alows you to work derectly with the element stored in that variable*/

//write total into the element with id of cost
var el = document.getElementById("cost");
el.textContent = "$" + total;