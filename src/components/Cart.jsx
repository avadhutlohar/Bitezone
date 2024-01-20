import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate cart subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate tax (assuming 10% tax)
  const tax = subtotal * 0.1;

  // Calculate total
  const total = subtotal + tax;

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <div className="mt-8 p-4 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Cart is Empty</h2>
          <p className="text-lg">
            Your cart is empty. Add some items from the menu.
          </p>
        </div>
      ) : (
        <React.Fragment>
          {/* Cart Items */}
          <ItemList items={cartItems} />

          {/* Cart Summary 
          <div className="mt-8 p-4 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal:</p>
              <p className="text-lg text-blue-500 font-semibold">
                Rs. {subtotal}
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Tax (10%):</p>
              <p className="text-lg text-blue-500 font-semibold">Rs. {tax}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl font-bold">Total:</p>
              <p className="text-xl text-blue-500 font-bold">Rs. {total}</p>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
          */}
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
