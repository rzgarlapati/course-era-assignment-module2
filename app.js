(function () {
'use strict';




angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {


  var buyList = this;

  buyList.items = ShoppingListService.getItems();
  console.log("inside controller",buyList.items);
  buyList.buyItem = function(index){
      ShoppingListService.buyItem(index);
  };
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getBoughtItems();

}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
  {name: "Milk",quantity:2},
  {name: "Donuts",quantity:200}
  ];

  var boughtItems = [];

  service.buyItem = function (index) {

    boughtItems.push(items[index]);
    items.splice(index,1);
  };

 service.getBoughtItems = function(){
    return boughtItems;
 };

  service.getItems = function () {
    console.log("items",items);
    return items;
  };
  
}

})();
