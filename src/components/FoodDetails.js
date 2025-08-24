import { useParams } from "react-router";

const FoodDetails = () => {
  const { foodId } = useParams();

  // Enhanced food data with perfect details
  const foodData = {
    "dosa": {
      name: "Crispy Dosa",
      image: "https://previews.123rf.com/images/imagefactory2013/imagefactory20131308/imagefactory2013130800402/21257690-indian-breakfast-dosa-served-in-a-plate.jpg",
      price: "₹80",
      originalPrice: "₹120",
      rating: "4.5",
      reviews: "2.1K",
      category: "South Indian",
      description: "Golden crispy dosa made with fermented rice and lentil batter, served with coconut chutney and sambar",
      ingredients: ["Rice", "Urad Dal", "Fenugreek Seeds", "Salt", "Oil"],
      cookTime: "15 mins",
      serves: "1-2 people",
      calories: "168 cal",
      tags: ["Vegetarian", "Gluten-Free", "Healthy"],
      offer: "30% OFF"
    },
    "pizza": {
      name: "Margherita Pizza",
      image: "https://t4.ftcdn.net/jpg/15/35/82/63/360_F_1535826376_aWQgmqazD66o6NmP3aLPL7SonBQWvTgA.jpg",
      price: "₹250",
      originalPrice: "₹350",
      rating: "4.3",
      reviews: "1.8K",
      category: "Italian",
      description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil leaves on crispy thin crust",
      ingredients: ["Pizza Base", "Mozzarella", "Tomato Sauce", "Fresh Basil", "Olive Oil"],
      cookTime: "20 mins",
      serves: "2-3 people",
      calories: "285 cal",
      tags: ["Vegetarian", "Cheesy", "Italian"],
      offer: "Buy 1 Get 1"
    },
    "burger": {
      name: "Veg Deluxe Burger",
      image: "https://www.shutterstock.com/image-photo/tasty-hamburger-white-background-600w-2289302671.jpg",
      price: "₹150",
      originalPrice: "₹200",
      rating: "4.2",
      reviews: "3.2K",
      category: "Fast Food",
      description: "Juicy vegetable patty with fresh lettuce, tomato, onion, and special sauce in a soft bun",
      ingredients: ["Burger Bun", "Veg Patty", "Lettuce", "Tomato", "Cheese", "Special Sauce"],
      cookTime: "12 mins",
      serves: "1 person",
      calories: "320 cal",
      tags: ["Vegetarian", "Fast Food", "Filling"],
      offer: "Free Fries"
    },
    "maggie": {
      name: "Masala Maggie",
      image: "https://i.pinimg.com/564x/52/78/57/527857882ac1c0c777bea93f15d8414d.jpg",
      price: "₹40",
      originalPrice: "₹60",
      rating: "4.0",
      reviews: "5.5K",
      category: "Instant Food",
      description: "Quick and tasty instant noodles with vegetables and aromatic spices",
      ingredients: ["Instant Noodles", "Vegetables", "Masala", "Onions", "Green Chilies"],
      cookTime: "5 mins",
      serves: "1 person",
      calories: "150 cal",
      tags: ["Quick", "Spicy", "Budget-Friendly"],
      offer: "20% OFF"
    },
    "manchurian": {
      name: "Veg Manchurian",
      image: "https://as1.ftcdn.net/jpg/08/44/86/64/1000_F_844866426_mOhLAeU5OovOf9RwLQRT9LV6wAjDi0Fn.jpg",
      price: "₹120",
      originalPrice: "₹160",
      rating: "4.3",
      reviews: "1.5K",
      category: "Indo-Chinese",
      description: "Crispy vegetable balls in tangy and spicy Indo-Chinese sauce",
      ingredients: ["Mixed Vegetables", "Flour", "Soy Sauce", "Ginger-Garlic", "Spices"],
      cookTime: "18 mins",
      serves: "2 people",
      calories: "245 cal",
      tags: ["Vegetarian", "Spicy", "Indo-Chinese"],
      offer: "25% OFF"
    },
    "franky": {
      name: "Veg Franky Roll",
      image: "https://www.shutterstock.com/image-photo/indian-chapati-veg-spring-rolls-260nw-2227554383.jpg",
      price: "₹90",
      originalPrice: "₹120",
      rating: "4.1",
      reviews: "2.8K",
      category: "Street Food",
      description: "Spiced vegetables wrapped in soft roti with tangy chutneys",
      ingredients: ["Roti", "Mixed Vegetables", "Green Chutney", "Tamarind Chutney", "Spices"],
      cookTime: "10 mins",
      serves: "1 person",
      calories: "195 cal",
      tags: ["Vegetarian", "Street Food", "Quick"],
      offer: "Buy 2 Get 1"
    },
    "noodles": {
      name: "Hakka Noodles",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb2n3VxsUyZpHEQPCLmEBd8c6prF1NzjMZA&s",
      price: "₹100",
      originalPrice: "₹140",
      rating: "4.2",
      reviews: "3.1K",
      category: "Chinese",
      description: "Stir-fried noodles with fresh vegetables and aromatic sauces",
      ingredients: ["Noodles", "Vegetables", "Soy Sauce", "Garlic", "Spring Onions"],
      cookTime: "15 mins",
      serves: "1-2 people",
      calories: "220 cal",
      tags: ["Vegetarian", "Chinese", "Filling"],
      offer: "30% OFF"
    },
    "momos": {
      name: "Steamed Momos",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQntLLPGRr7YHC4Rps_M49O5qy1S9htxWO3g&s",
      price: "₹80",
      originalPrice: "₹110",
      rating: "4.4",
      reviews: "4.2K",
      category: "Tibetan",
      description: "Soft steamed dumplings filled with seasoned vegetables",
      ingredients: ["Flour", "Mixed Vegetables", "Ginger", "Garlic", "Spices"],
      cookTime: "20 mins",
      serves: "1 person",
      calories: "180 cal",
      tags: ["Vegetarian", "Steamed", "Healthy"],
      offer: "Free Chutney"
    },
    "idli-vada": {
      name: "Idli Vada Combo",
      image: "https://i.pinimg.com/736x/24/7d/63/247d63ebed90c69c479dc8095ebd1457.jpg",
      price: "₹70",
      originalPrice: "₹100",
      rating: "4.6",
      reviews: "1.9K",
      category: "South Indian",
      description: "Soft steamed idlis with crispy vadas, served with sambar and chutney",
      ingredients: ["Rice", "Urad Dal", "Salt", "Oil", "Curry Leaves"],
      cookTime: "25 mins",
      serves: "1 person",
      calories: "200 cal",
      tags: ["Vegetarian", "South Indian", "Traditional"],
      offer: "Combo Deal"
    },
    "puff": {
      name: "Veg Puff",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7f2BYQ3daJ0G9zzarr4Bv2RXu1s5Jw2tq8Q&s",
      price: "₹50",
      originalPrice: "₹70",
      rating: "4.0",
      reviews: "2.5K",
      category: "Bakery",
      description: "Flaky pastry filled with spiced vegetables and herbs",
      ingredients: ["Puff Pastry", "Potatoes", "Peas", "Spices", "Herbs"],
      cookTime: "8 mins",
      serves: "1 person",
      calories: "180 cal",
      tags: ["Vegetarian", "Crispy", "Snack"],
      offer: "Hot & Fresh"
    },
    "dabeli": {
      name: "Kutchi Dabeli",
      image: "https://jalsaindiancuisine.com/wp-content/uploads/2024/05/Dabeli.jpg",
      price: "₹60",
      originalPrice: "₹80",
      rating: "4.3",
      reviews: "1.7K",
      category: "Gujarati",
      description: "Gujarati street food with spiced potato filling and chutneys",
      ingredients: ["Pav", "Potato", "Tamarind Chutney", "Peanuts", "Sev"],
      cookTime: "12 mins",
      serves: "1 person",
      calories: "210 cal",
      tags: ["Vegetarian", "Street Food", "Gujarati"],
      offer: "Authentic Taste"
    },
    "pav-bhaji": {
      name: "Mumbai Pav Bhaji",
      image: "https://img.freepik.com/premium-photo/awesome-indian-pav-bhaji-dish-white-background_878783-1884.jpg",
      price: "₹100",
      originalPrice: "₹130",
      rating: "4.5",
      reviews: "3.8K",
      category: "Mumbai Street",
      description: "Spiced mixed vegetable curry served with buttered pav bread",
      ingredients: ["Mixed Vegetables", "Pav", "Butter", "Onions", "Spices"],
      cookTime: "20 mins",
      serves: "1-2 people",
      calories: "350 cal",
      tags: ["Vegetarian", "Mumbai Special", "Filling"],
      offer: "Extra Butter"
    },
    "sandwich": {
      name: "Grilled Sandwich",
      image: "https://media.istockphoto.com/id/490653943/photo/sandwich.jpg?s=612x612&w=0&k=20&c=Y-olXF7vNJQ4b0bXZxa5XNVko64NyQ1YXGzcJWW2mW0=",
      price: "₹80",
      originalPrice: "₹110",
      rating: "4.1",
      reviews: "2.2K",
      category: "Continental",
      description: "Grilled bread sandwich with fresh vegetables and cheese",
      ingredients: ["Bread", "Vegetables", "Cheese", "Butter", "Herbs"],
      cookTime: "10 mins",
      serves: "1 person",
      calories: "280 cal",
      tags: ["Vegetarian", "Grilled", "Quick"],
      offer: "Crispy & Hot"
    },
    "drink": {
      name: "Fresh Beverages",
      image: "https://img.freepik.com/premium-photo/3d-collection-alcoholic-beverages-bottles-isolated-white-background_771335-31685.jpg",
      price: "₹50",
      originalPrice: "₹70",
      rating: "4.2",
      reviews: "5.1K",
      category: "Beverages",
      description: "Refreshing cold drinks and fresh juices",
      ingredients: ["Fresh Fruits", "Water", "Sugar", "Ice", "Natural Flavors"],
      cookTime: "3 mins",
      serves: "1 person",
      calories: "120 cal",
      tags: ["Refreshing", "Cold", "Natural"],
      offer: "Chill & Fresh"
    },
    "coffee": {
      name: "Hot Coffee",
      image: "https://img.freepik.com/premium-photo/white-cup-black-coffee-isolated-white-background_252965-15.jpg",
      price: "₹30",
      originalPrice: "₹50",
      rating: "4.4",
      reviews: "6.3K",
      category: "Hot Beverages",
      description: "Freshly brewed aromatic coffee with rich flavor",
      ingredients: ["Coffee Beans", "Hot Water", "Sugar", "Milk"],
      cookTime: "5 mins",
      serves: "1 person",
      calories: "50 cal",
      tags: ["Hot", "Energizing", "Aromatic"],
      offer: "Morning Special"
    },
    "thali": {
      name: "Healthy Thali",
      image: "https://media.istockphoto.com/id/1314495955/photo/vegetarian-buddha-bowl-plate-of-healthy-salad-with-quinoa-and-fresh-vegetables-isolated-on.jpg?s=612x612&w=0&k=20&c=S9QUbhItBCpQv8bXXHCtZ03RKS4OQvAfaMBtnp8uB0Y=",
      price: "₹200",
      originalPrice: "₹280",
      rating: "4.7",
      reviews: "1.2K",
      category: "Healthy",
      description: "Nutritious bowl with quinoa, fresh vegetables and healthy dressing",
      ingredients: ["Quinoa", "Fresh Vegetables", "Nuts", "Seeds", "Healthy Dressing"],
      cookTime: "15 mins",
      serves: "1 person",
      calories: "380 cal",
      tags: ["Healthy", "Nutritious", "Fresh"],
      offer: "Superfood Bowl"
    },
    "chakhna": {
      name: "Spicy Chakhna",
      image: "https://t3.ftcdn.net/jpg/05/11/67/76/360_F_511677613_fJcG4O4sGZDtO5hvdWjLM3rzbJCQ8xC2.jpg",
      price: "₹120",
      originalPrice: "₹160",
      rating: "4.0",
      reviews: "1.8K",
      category: "Snacks",
      description: "Spicy mixed nuts and snacks perfect for evening time",
      ingredients: ["Mixed Nuts", "Spices", "Oil", "Salt", "Herbs"],
      cookTime: "5 mins",
      serves: "2-3 people",
      calories: "250 cal",
      tags: ["Spicy", "Crunchy", "Evening Snack"],
      offer: "Party Pack"
    },
    "full-dish": {
      name: "Full Dish Thali",
      image: "https://thumbs.dreamstime.com/b/typical-indian-dish-thali-isolated-white-background-set-vegetarian-dishes-one-large-round-plate-213640070.jpg",
      price: "₹300",
      originalPrice: "₹400",
      rating: "4.8",
      reviews: "2.9K",
      category: "Complete Meal",
      description: "Complete Indian meal with variety of dishes, rice, dal, vegetables and sweets",
      ingredients: ["Rice", "Dal", "Vegetables", "Roti", "Pickle", "Sweet", "Papad"],
      cookTime: "30 mins",
      serves: "1 person",
      calories: "650 cal",
      tags: ["Complete Meal", "Traditional", "Filling"],
      offer: "Full Satisfaction"
    },
 
  "vegHakkaNoodles": {
  name: "Veg Hakka Noodles",
  image: "https://static.vecteezy.com/system/resources/previews/051/125/508/non_2x/delicious-fried-noodles-isolated-on-transparent-background-png.png",
  price: "₹110",
  originalPrice: "₹140",
  rating: "4.3",
  reviews: "1.8K",
  category: "Indo-Chinese",
  description: "Stir-fried noodles with fresh vegetables, seasoned with soy sauce, vinegar, and chili, served hot and spicy.",
  ingredients: ["Noodles", "Capsicum", "Cabbage", "Carrot", "Soy Sauce", "Vinegar"],
  cookTime: "20 mins",
  serves: "1-2 people",
  calories: "250 cal",
  tags: ["Vegetarian", "Spicy", "Street Food"],
  offer: "20% OFF"
  },

  "paneerButterMasala": {
  name: "Paneer Butter Masala",
  image: "https://img.freepik.com/premium-photo/creamy-paneer-butter-masala-white-background_1188475-1813.jpg",
  price: "₹150",
  originalPrice: "₹180",
  rating: "4.7",
  reviews: "3.5K",
  category: "North Indian",
  description: "Creamy tomato-based curry with soft paneer cubes, infused with Indian spices and garnished with cream and butter.",
  ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Spices"],
  cookTime: "25 mins",
  serves: "2-3 people",
  calories: "320 cal",
  tags: ["Vegetarian", "Rich", "Popular"],
  offer: "15% OFF"
}

};


  // Get food data or default
  const food = foodData[foodId] || {
    name: "Special Dish",
    image: "https://via.placeholder.com/400x300?text=Food+Image",
    price: "₹99",
    originalPrice: "₹150",
    rating: "4.0",
    reviews: "1K",
    category: "Special",
    description: "Delicious food item with amazing taste and quality ingredients",
    ingredients: ["Fresh Ingredients", "Special Spices", "Love"],
    cookTime: "10 mins",
    serves: "1 person",
    calories: "200 cal",
    tags: ["Special", "Tasty"],
    offer: "Limited Time"
  };
   

  const handleOrderNow = () => {
    if (!food) return; // safety check
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      quantity: 1,
    });
    alert(`${food.name} added to cart!`);
  };

  return (
    <div className="food-details-container">
      {/* Food Header Card */}
      <div className="food-header-card">
        <div className="food-image-section">
          <img src={food.image} alt={food.name} className="food-main-image" />
          <div className="offer-badge">{food.offer}</div>
        </div>

        <div className="food-info-section">
          <div className="food-category">{food.category}</div>
          <h1 className="food-title">{food.name}</h1>

          <div className="rating-section">
            <span className="rating">⭐ {food.rating}</span>
            <span className="reviews">({food.reviews} reviews)</span>
          </div>

          <div className="price-section">
            <span className="current-price">{food.price}</span>
            <span className="original-price">{food.originalPrice}</span>
          </div>

          <div className="food-tags">
            {food.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Food Description Card */}
      <div className="food-description-card">
        <h3>About this dish</h3>
        <p>{food.description}</p>
      </div>

      {/* Food Details Grid */}
      <div className="food-details-grid">
        <div className="detail-card">
          <h4>🕒 Cook Time</h4>
          <p>{food.cookTime}</p>
        </div>
        <div className="detail-card">
          <h4>👥 Serves</h4>
          <p>{food.serves}</p>
        </div>
        <div className="detail-card">
          <h4>🔥 Calories</h4>
          <p>{food.calories}</p>
        </div>
      </div>

      {/* Ingredients Card */}
      <div className="ingredients-card">
        <h3>Ingredients</h3>
        <div className="ingredients-list">
          {food.ingredients.map((ingredient, index) => (
            <span key={index} className="ingredient-item">{ingredient}</span>
          ))}
        </div>
      </div>

      {/* Available Restaurants Card */}
      <div className="restaurants-card">
        <h3>Available at these restaurants</h3>
        <div className="restaurant-list">
          <div className="restaurant-item">
            <div className="restaurant-info">
              <h4>Food Palace</h4>
              <p>⭐ 4.5 • 15-20 mins • ₹50 delivery</p>
            </div>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="restaurant-item">
            <div className="restaurant-info">
              <h4>Quick Bites</h4>
              <p>⭐ 4.2 • 20-25 mins • ₹30 delivery</p>
            </div>
            <button className="order-btn">Order Now</button>
          </div>
          <div className="restaurant-item">
            <div className="restaurant-info">
              <h4>Tasty Corner</h4>
              <p>⭐ 4.7 • 10-15 mins • Free delivery</p>
            </div>
            <button className="order-btn" onClick={handleOrderNow}>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
