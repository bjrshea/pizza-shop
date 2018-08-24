// Backend Logic:
function Order(name, price) {
  this.pizzaName = name;
  this.pizzaPrice = price;
}

Order.prototype.orderDetails = function() {
  return this.pizzaName + ", your order is: $" + this.pizzaPrice + ". It should be delivered in about 45 minutes!";
}

// Frontend Logic:
$(document).ready(function(){
  $("#order-form").submit(function(event) {
    event.preventDefault();

  // User inputs:
    var toppingsArray = [];
    var inputtedName = $("#user-name").val();
    var inputtedSize = $("#user-size").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = $(this).val();
      toppingsArray.push(inputtedToppings);
    });

  // Price of toppings & pizza size:
    var priceOfToppings = 0;
    if(toppingsArray.length === 1) {
      priceOfToppings += 1;
    } else if(toppingsArray.length === 2){
      priceOfToppings += 2;
    } else if (toppingsArray.length === 3) {
      priceOfToppings += 3;
    } else if (toppingsArray.length === 4) {
      priceOfToppings += 4;
    } else if (toppingsArray.length === 5) {
      priceOfToppings += 5;
    } else if (toppingsArray.length === 6) {
      priceOfToppings += 6;
    } else if (toppingsArray.length === 7) {
      priceOfToppings += 7;
    } else {
      priceOfToppings += 0;
    }
    console.log(priceOfToppings);

    var priceOfSize = 0;
    if(inputtedSize === "small") {
      priceOfSize = 8;
    } else if (inputtedSize === "medium") {
      priceOfSize = 10;
    } else {
      priceOfSize = 12;
    }
    console.log(priceOfSize);

    var pizzaTotal = priceOfToppings + priceOfSize;
    console.log(pizzaTotal);


  // Pizza order:
    var pizzaOrder = new Order(inputtedName, pizzaTotal);

    $("#order-price").append(pizzaOrder.orderDetails());
  });
});
