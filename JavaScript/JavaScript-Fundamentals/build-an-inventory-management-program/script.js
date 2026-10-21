let inventory = [];

/* takes the product name as its argument and returns the index
of the corresponding product object inside the inventory array.
If the product is not found, the function should return -1.
The function should always use the lowercase form of the
product name to perform the search.*/
function findProductIndex(name) {
  let index = -1;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      index = i;
      return index;
    }
  }
  return index;
}

/*takes a product object as its argument. If the product is
already present in the inventory, update its quantity value by
adding the quantity passed in to the current quantity and log to
the console the product name followed by a space and quantity
updated.*/
function addProduct(prod) {
  let index = findProductIndex(prod.name);
  if (index === -1) {
    inventory.push({ name: prod.name.toLowerCase(), quantity: prod.quantity });
    console.log(`${prod.name.toLowerCase()} added to inventory`);
  } else {
    inventory[index].quantity += prod.quantity;
    console.log(`${prod.name.toLowerCase()} quantity updated`);
  }
  return inventory;
}

/*takes the product name and quantity as its arguments. should
subtract the passed quantity from the corresponding product
object inside the inventory and log the string Remaining
<product-name> pieces: <product-quantity> to the console.
If the product to remove is not present in the inventory,
log <product-name> not found to the console.*/
function removeProduct(prodName, prodQuantity) {
  let index = findProductIndex(prodName);
  if (index === -1) {
    console.log(`${prodName.toLowerCase()} not found`);
  } else {
    let currentQuant = inventory[index].quantity;
    inventory[index].quantity -= prodQuantity;
    if (inventory[index].quantity <= 0) {
      console.log(
        `Not enough ${prodName.toLowerCase()} available, remaining pieces: ${currentQuant}`,
      );
      inventory.splice(index, 1);
    } else {
      console.log(
        `Remaining ${prodName.toLowerCase()} pieces: ${inventory[index].quantity}`,
      );
    }
  }
  return inventory;
}
