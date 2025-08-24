import { useParams } from "react-router";
import { useState, useEffect } from "react";
import mokeData from "../utils/mokeData";
import Resturantcategary from "./Resturantcategary";
import { useDispatch } from "react-redux";
import { addItem } from "../redux.slices-stores/cartSlice";

const ResturenttMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [showIndex, setShowIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const foundRestaurant = mokeData.find(res => res.data.id === resId);
    setRestaurant(foundRestaurant?.data);

    if (foundRestaurant) {
      generateMenuItems(foundRestaurant.data);
    }
  }, [resId]);

  const generateMenuItems = (restaurantData) => {
    const menuData = {
      "North Indian": [
        { name: "Paneer Butter Masala", price: "₹240", description: "Cottage cheese in creamy tomato gravy", gender: "man" },
        { name: "Aloo Paratha", price: "₹100", description: "Stuffed flatbread served with curd", gender: "woman" },
        { name: "Rajma Chawal", price: "₹150", description: "Kidney beans curry with steamed rice", gender: "boy" },
        { name: "Chole Bhature", price: "₹160", description: "Spicy chickpeas with fluffy bread", gender: "girl" }
      ],
      "South Indian": [
        { name: "Masala Dosa", price: "₹110", description: "Rice crepe filled with spicy potato", gender: "girl" },
        { name: "Idli Sambar", price: "₹90", description: "Steamed rice cakes with lentil soup", gender: "boy" },
        { name: "Upma", price: "₹80", description: "Savory semolina porridge", gender: "child" },
        { name: "Medu Vada", price: "₹100", description: "Fried lentil donut served with chutney", gender: "man" }
      ],
      "Tandoori": [
        { name: "Tandoori Chicken", price: "₹260", description: "Spiced grilled chicken", gender: "man" },
        { name: "Tandoori Paneer Tikka", price: "₹210", description: "Cottage cheese skewers", gender: "woman" },
        { name: "Tandoori Roti", price: "₹30", description: "Whole wheat bread from tandoor", gender: "boy" },
        { name: "Seekh Kebab", price: "₹190", description: "Minced meat skewers", gender: "girl" }
      ],
      "Seafood": [
        { name: "Fish Curry", price: "₹280", description: "Spicy coconut-based fish curry", gender: "man" },
        { name: "Prawn Masala", price: "₹320", description: "Juicy prawns in tomato-onion gravy", gender: "woman" },
        { name: "Fish Fry", price: "₹200", description: "Crispy golden fish fillet", gender: "boy" },
        { name: "Crab Sukka", price: "₹350", description: "Spiced dry crab dish", gender: "girl" }
      ],
      "Vegan": [
        { name: "Vegan Buddha Bowl", price: "₹300", description: "Quinoa, hummus, veggies in one bowl", gender: "woman" },
        { name: "Tofu Stir Fry", price: "₹250", description: "Tofu with bell peppers and soy glaze", gender: "man" },
        { name: "Vegan Dal", price: "₹180", description: "Lentil soup made vegan-friendly", gender: "boy" },
        { name: "Stuffed Capsicum", price: "₹220", description: "Bell peppers stuffed with quinoa", gender: "girl" }
      ],
      "Street Food": [
        { name: "Pani Puri", price: "₹50", description: "Spicy tangy water-filled snacks", gender: "child" },
        { name: "Vada Pav", price: "₹40", description: "Potato fritter in bun", gender: "boy" },
        { name: "Pav Bhaji", price: "₹120", description: "Spicy mashed veggies with bread", gender: "man" },
        { name: "Samosa", price: "₹30", description: "Crispy triangle with potato filling", gender: "girl" }
      ],
      "Biryani": [
        { name: "Hyderabadi Biryani", price: "₹300", description: "Fragrant basmati rice with meat", gender: "man" },
        { name: "Veg Biryani", price: "₹240", description: "Layered rice with vegetables", gender: "woman" },
        { name: "Chicken Dum Biryani", price: "₹320", description: "Slow-cooked chicken biryani", gender: "boy" },
        { name: "Egg Biryani", price: "₹260", description: "Eggs layered with masala rice", gender: "girl" }
      ],
      "Indo-Chinese": [
        { name: "Veg Manchurian", price: "₹180", description: "Veggie balls in spicy gravy", gender: "boy" },
        { name: "Chilli Chicken", price: "₹220", description: "Crispy chicken in spicy sauce", gender: "man" },
        { name: "Hakka Noodles", price: "₹160", description: "Noodles tossed with veggies", gender: "child" },
        { name: "Schezwan Rice", price: "₹190", description: "Spicy stir-fried rice", gender: "girl" }
      ],
      "Mughlai": [
        { name: "Shahi Paneer", price: "₹260", description: "Paneer in rich cashew cream curry", gender: "woman" },
        { name: "Rogan Josh", price: "₹340", description: "Lamb curry from Kashmir", gender: "man" },
        { name: "Chicken Korma", price: "₹280", description: "Creamy spiced chicken dish", gender: "boy" },
        { name: "Zafrani Pulao", price: "₹220", description: "Saffron flavored sweet rice", gender: "girl" }
      ],
      "Tibetan": [
        { name: "Steamed Momos", price: "₹120", description: "Dumplings filled with veg or meat", gender: "child" },
        { name: "Thukpa", price: "₹150", description: "Tibetan noodle soup", gender: "boy" },
        { name: "Fried Momos", price: "₹140", description: "Crispy version of momos", gender: "girl" },
        { name: "Shabalay", price: "₹160", description: "Tibetan meat pastry", gender: "man" }
      ],
      "default": [
        { name: "Special Dish", price: "₹250", description: "Chef's special recommendation", gender: "girl" },
        { name: "Appetizer Platter", price: "₹180", description: "Mixed appetizers", gender: "boy" },
        { name: "Main Course", price: "₹300", description: "Today's special main course", gender: "child" },
        { name: "Dessert", price: "₹120", description: "Sweet ending to your meal", gender: "man" }
      ]
    };


    const items = menuData[restaurantData.type] || menuData.default;
    setMenuItems(items);
  };

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurant) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Loading Restaurant Menu...</h2>
        <p>Restaurant ID: {resId}</p>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "150px", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <img 
          src={restaurant.img}
          alt={restaurant.name}
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "15px",
            marginLeft: "300px"
          }}
        />
        <h1 style={{ color: "#733E48", marginBottom: "10px" }}>{restaurant.name}</h1>
        <p style={{ fontSize: "16px", color: "#666" }}>{restaurant.type} Cuisine</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
          <span>⭐ {restaurant.averageRating} stars</span>
          <span>🕒 {restaurant.deliveryTime} min</span>
          <span>💰 ₹{restaurant.costForTwo / 100} for two</span>
        </div>
        <p style={{ color: "#007bff", fontWeight: "bold" }}>{restaurant.city}</p>
      </div>

      <div>
        <h2 style={{ color: "#733E48", borderBottom: "2px solid #733E48", paddingBottom: "10px" }}>
          Menu Items
        </h2>
        <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
          {menuItems.map((item, index) => (
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
                  <button onClick={() => handleAddItems(item)}>add</button>
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{ color: "#733E48", borderBottom: "2px solid #733E48", margin: "100px 0px 0px 0px" }}>Special Offer</h2>
        {menuItems.map((items, index) => (
          <Resturantcategary
            key={index}
            menuItems={items}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturenttMenu;
