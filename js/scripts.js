// business logic
function Pizza(cheese, sauce, protein, vegetable) {
  this.cheese = cheese;
  this.sauce = sauce;
  this.protein = protein;
  this.vegetable = vegetable;
  this.baseprice = 6;
  this.totalprice = ("0");
};
Pizza.prototype.price = function(){
  this.totalprice = this.cheese + this.sauce + this.protein + this.vegetable + this.baseprice;
  return this.totalprice;
};

// user interface logic
$(document).ready(function() {
    $("form").submit(function(event){
    event.preventDefault();
    var icheese = parseInt($("#cheese").val());
    var isauce = parseInt($("#sauce").val());
    var iprotein = parseInt($("#protein").val());
    var ivegetable = parseInt($("#vegetable").val());
    var newPizza = new Pizza(icheese, isauce, iprotein, ivegetable);
    $("#show").text("$" + newPizza.price());
  });
});
