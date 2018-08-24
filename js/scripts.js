// Backend Logic:
var toppingsArray = [];

function Order(name, size, toppings) {
  this.pizzaName = name;
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Order.prototype.orderPrice = function () {
  for 
}



// Frontend Logic:
$(document).ready(function() {
  $("#order-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#user-name").val();
    var inputtedSize = $("#user-size").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
      toppingsArray.push(inputtedToppings);
    });

    var pizzaOrder = new Order(inputtedName, inputtedSize, toppingsArray);
    console.log(pizzaOrder);

  });
});
