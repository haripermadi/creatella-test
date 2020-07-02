export const formatDate = date => {
  let diffInSecond = (Date.now() - new Date(date)) / 1000;
  let diff;
  //year 60*60*24*365
  diff = Math.floor(diffInSecond / 31536000);
  // console.log(diff);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'years' : 'year'} ago`;
  }
  //month 60*60*24*30
  diff = Math.floor(diffInSecond / 2592000);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'months' : 'month'} ago`;
  }
  //day 60*60*24
  diff = Math.floor(diffInSecond / 86400);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'days' : 'day'} ago`;
  }
  //minutes 60*60
  diff = Math.floor(diffInSecond / 3600);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'minutes' : 'minute'} ago`;
  }
  //second 60
  diff = Math.floor(diffInSecond / 60);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'seconds' : 'second'} ago`;
  }
};

export const addToCart = (currentCart, inputCart) => {
  const existingCartItem = currentCart.find(item => item.id === inputCart.id);
  console.log('existitem--------->', existingCartItem);
  if (existingCartItem) {
    let currentCartItems = currentCart.map(item =>
      item.id === inputCart.id ? {...item, quantity: item.quantity + 1} : item,
    );
    console.log('currentite,------------>', currentCartItems);
    return currentCartItems;
  } else {
    return [...currentCart, {...inputCart, quantity: 1}];
  }
};

export const totalPrice = carts => {
  return carts.reduce((acc, cumm) => acc + cumm.quantity * cumm.price, 0);
};

export const reduceCartItem = (currentCart, removedItem) => {
  const existingCartItem = currentCart.find(item => item.id === removedItem.id);

  if (existingCartItem.quantity === 1) {
    return currentCart.filter(item => item.id !== removedItem.id);
  }

  let currentCartItems = currentCart.map(item =>
    item.id === removedItem.id ? {...item, quantity: item.quantity - 1} : item,
  );
  return currentCartItems;
};

export const totalItem = carts => {
  return carts.reduce((acc, cumm) => acc + cumm.quantity, 0);
};
