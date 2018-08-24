// Backend Logic:
function Order(name, size, toppings) {
  this.pizzaName = name;
  this.pizzaSize = size;
  // this.pizzaToppings = [];
}

// Frontend Logic:
$(document).ready(function(){
  $("#order-form").submit(function(event){
    event.preventDefault();

    var toppingsArray = [];
    var inputtedName = $("#user-name").val();
    console.log(inputtedName);
    var inputtedSize = $("#user-size").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
      toppingsArray.push(inputtedToppings);
    });

    var pizzaOrder = new Order(inputtedName, inputtedSize, toppingsArray);
    console.log(pizzaOrder);

  });
});
