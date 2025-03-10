export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existingItem) {
    existingItem.quantity += 1; 
  } else {
    cartItems.push({ ...cartItemToAdd, quantity: 1 });
  }
}
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(item => item.id === cartItemToRemove.id);
  existingItem.quantity -= 1;
 
}