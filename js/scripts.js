// Backend Logic:
var toppingsArray = [];

function Order(size, toppings) {
  this.pizzaSize = size
  this.pizzaToppings = toppings
}

// Frontend Logic:
$(document).ready(function(){
  $("#order-form").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
      toppingsArray.push(inputtedToppings);
    });

    var inputtedSize = $("#user-size").val();

    var pizzaOrder = new Order(inputtedSize, toppingsArray);
    console.log(pizzaOrder);

  });
});
