// Backend Logic:
function Order(size, toppings) {
  this.size = size
  this.toppings = toppings
}

// Frontend Logic:
$(document).ready(function(){
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    var userInput = new Order("#user-size", "user-toppings")
    console.log(userInput)
  });
});
