// Backend Logic:
function Order(size, toppings) {
  this.pizzaSize = size
  this.pizzaToppings = toppings
}

// Frontend Logic:
$(document).ready(function(){
  $("#order-form").submit(function(event){
    event.preventDefault();

    var inputOne = $("#user-size").val();
    var inputTwo = $("#user-toppings").val();

    var pizzaOrder = new Order(inputOne, inputTwo);

    $("#order-priice").append(pizzaOrder);

    $("input#user-size").val("");
    $("input#user-toppings").val("");


  });
});
