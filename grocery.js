//SWDV-665 – Advanced Topics in Software Development
//Maryville University, 2019
//Week 1 Assignment: TypeScript Assignment
//grocery.ts
//Henrik Olsen (0913075)
var Grocery = /** @class */ (function () {
    function Grocery(listName) {
        this.listName = listName;
        this.groceryList = [];
        this.groceryListName = listName;
    }
    Grocery.prototype.add = function (addItem) {
        this.groceryList.push(addItem);
    };
    return Grocery;
}());
var GroceryItem = /** @class */ (function () {
    function GroceryItem(item, quantity, category) {
        this.item = item;
        this.itemName = item;
        this.quantity = quantity;
        this.category = category;
    }
    return GroceryItem;
}());
var myShoppingList1 = new Grocery("Walmart");
myShoppingList1.add(new GroceryItem("Milk, 2%  ", 1, "Dairy"));
myShoppingList1.add(new GroceryItem("Bread     ", 2, "Bakery"));
myShoppingList1.add(new GroceryItem("Eggs      ", 12, "Dairy"));
myShoppingList1.add(new GroceryItem("Bananas   ", 6, "Fruit & Vegetables"));
document.body.innerHTML = "<h1><p>" + myShoppingList1.groceryListName + "</p></h1>";
var tempString = "";
for (var i = 0; i < myShoppingList1.groceryListName.length; i++) {
    tempString += "*";
}
document.body.innerHTML += "<h1><p>" + tempString + "</p></h1>";
document.body.innerHTML += "<h2><strong><pre>Item &Tab;&Tab;    Quantity &Tab;&Tab;     Category</pre></strong></h2>";
for (var i = 0; i < myShoppingList1.groceryList.length; i++) {
    document.body.innerHTML += "<h2><p><pre>" + myShoppingList1.groceryList[i].itemName + "&Tab;&Tab;" + myShoppingList1.groceryList[i].quantity.toString() + "&Tab;&Tab;&Tab;" + myShoppingList1.groceryList[i].category + "</pre></p></h2>";
}
