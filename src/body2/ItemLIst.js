import { useDispatch } from "react-redux";
import { addItem } from "../redux.slices-stores/cartSlice";



  
  const items = [
  {
    id: 1,
    name: "Special Appetizer",
    description: "Tasty and crispy appetizer to start your meal",
    price: "₹150",
  },
  {
    id: 2,
    name: "Main Course Deluxe",
    description: "Full combo meal with curry, rice, and breads",
    price: "₹350",
  },
  {
    id: 3,
    name: "Dessert Special",
    description: "Sweet dish to end your meal",
    price: "₹120",
  },
  {
    id: 4,
    name: "Beverage",
    description: "Refreshing drink to go with your meal",
    price: "₹90",
  },
];

const ItemList = () => {
  const dispatch = useDispatch();

  const handleAddItems = (items) => {
    dispatch(addItem(items));
  }; 


  return (
    <div>
     <div>
        <label>Recommended ({items.length})</label>
      </div>
      <div>
      {items.map((item) => (
        <div key={item.id}>
          <input type="checkbox" id={`item-${item.id}`} />
          <label htmlFor={`item-${item.id}`}>
            {item.name} - {item.price}
          </label>
        </div>
      ))}
    </div>
      <div>
      <button 
       onClick={()=>handleAddItems(items)}
      >
      add+</button>
      </div>
    </div>
  
  );
};

export default ItemList;