// Backend Logic:
function Order(name, size, toppings) {
  this.pizzaName = name;
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

// Frontend Logic:
$(document).ready(function(){
  $("#order-form").submit(function(event) {
    event.preventDefault();

    var toppingsArray = [];
    var inputtedName = $("#user-name").val();
    var inputtedSize = $("#user-size").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = $(this).val();
      toppingsArray.push(inputtedToppings);
    });

    var priceOfToppings = 0;
    if(toppingsArray.length === 1) {
      priceOfToppings += 1;
    } else if(toppingsArray.length === 2){
      priceOfToppings += 2;
    } else if (toppingsArray.length === 3) {
      priceOfToppings += 3;
    } else {
      priceOfToppings += 0;
    }

    var priceOfSize = 0;
    if

    console.log(priceOfToppings);

    var pizzaOrder = new Order(inputtedName, inputtedSize, toppingsArray);



  });
});
