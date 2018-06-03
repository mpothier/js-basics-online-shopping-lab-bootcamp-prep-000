var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push(Object.assign({},{ itemName: item, itemPrice: price }));
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length > 1) {
    var strStart = [];
    for (var i = 0; i < cart.length - 1; i++) {
      strStart.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `)
    }
    var strEnd = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`;
    return `In your cart, you have ${strStart.join("")}and ${strEnd}.`;
  }
}

var cart = [ { itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]

function total() {
  var totalCost = 0;
  for (var i=0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice;
  }
  console.log(totalCost)
  return totalCost;
}

total()

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  
}
