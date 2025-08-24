import { useDispatch, useSelector } from "react-redux";

import { clearCart,removeItem} from "../redux.slices-stores/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

    const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  console.log(cartItems);
  

  return (
    <div style={{ padding: "150px 20px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px", color: "#733E48" }}>🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#666" }}>Your cart is empty.</p>
      ) : (
        <>
            
          {/* {cartItems} */}
          {/* <ItemList item={cartItems} /> */}
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "#f9f9f9",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 5px 0", color: "#733E48" }}>{item.name}</h3>
                <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>{item.description}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", color: "#007bff" }}>
                  {item.price}
                </span>
                <p>
                  <button onClick={() => handleRemoveItem(item)}>remove -</button>
                </p>
              </div>
            </div>

          ))}

          <button
            onClick={handleClearCart}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#733E48",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
