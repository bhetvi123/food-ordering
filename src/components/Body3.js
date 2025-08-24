import { Link } from "react-router";

const Body3 = () => {
  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🍽 Choose Your Meal
      </h1>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { path: "dosa", img: "https://previews.123rf.com/images/imagefactory2013/imagefactory20131308/imagefactory2013130800402/21257690-indian-breakfast-dosa-served-in-a-plate.jpg", label: "Dosa" },
          { path: "manchurian", img: "https://as1.ftcdn.net/jpg/08/44/86/64/1000_F_844866426_mOhLAeU5OovOf9RwLQRT9LV6wAjDi0Fn.jpg", label: "Manchurian" },
          { path: "pizza", img: "https://t4.ftcdn.net/jpg/15/35/82/63/360_F_1535826376_aWQgmqazD66o6NmP3aLPL7SonBQWvTgA.jpg", label: "Pizza" },
          { path: "burger", img: "https://www.shutterstock.com/image-photo/tasty-hamburger-white-background-600w-2289302671.jpg", label: "Burger" },
          { path: "franky", img: "https://www.shutterstock.com/image-photo/indian-chapati-veg-spring-rolls-260nw-2227554383.jpg", label: "Franky" },
          { path: "maggie", img: "https://i.pinimg.com/564x/52/78/57/527857882ac1c0c777bea93f15d8414d.jpg", label: "Maggie" },
          { path: "noodles", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb2n3VxsUyZpHEQPCLmEBd8c6prF1NzjMZA&s", label: "Noodles" },
          { path: "momos", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQntLLPGRr7YHC4Rps_M49O5qy1S9htxWO3g&s", label: "Momos" },
          { path: "idli-vada", img: "https://i.pinimg.com/736x/24/7d/63/247d63ebed90c69c479dc8095ebd1457.jpg", label: "Idli Vada" },
          { path: "puff", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7f2BYQ3daJ0G9zzarr4Bv2RXu1s5Jw2tq8Q&s", label: "Puff" },
          { path: "dabeli", img: "https://jalsaindiancuisine.com/wp-content/uploads/2024/05/Dabeli.jpg", label: "Dabeli" },
          { path: "pav-bhaji", img: "https://img.freepik.com/premium-photo/awesome-indian-pav-bhaji-dish-white-background_878783-1884.jpg", label: "Pav Bhaji" },
          { path: "sandwich", img: "https://media.istockphoto.com/id/490653943/photo/sandwich.jpg?s=612x612&w=0&k=20&c=Y-olXF7vNJQ4b0bXZxa5XNVko64NyQ1YXGzcJWW2mW0=", label: "Sandwich" },
          { path: "drink", img: "https://img.freepik.com/premium-photo/3d-collection-alcoholic-beverages-bottles-isolated-white-background_771335-31685.jpg", label: "Drinks" },
          { path: "coffee", img: "https://img.freepik.com/premium-photo/white-cup-black-coffee-isolated-white-background_252965-15.jpg", label: "Coffee" },
          { path: "thali", img: "https://media.istockphoto.com/id/1314495955/photo/vegetarian-buddha-bowl-plate-of-healthy-salad-with-quinoa-and-fresh-vegetables-isolated-on.jpg?s=612x612&w=0&k=20&c=S9QUbhItBCpQv8bXXHCtZ03RKS4OQvAfaMBtnp8uB0Y=", label: "Healthy Thali" },
          { path: "chakhna", img: "https://t3.ftcdn.net/jpg/05/11/67/76/360_F_511677613_fJcG4O4sGZDtO5hvdWjLM3rzbJCQ8xC2.jpg", label: "Chakhna" },
          { path: "full-dish", img: "https://thumbs.dreamstime.com/b/typical-indian-dish-thali-isolated-white-background-set-vegetarian-dishes-one-large-round-plate-213640070.jpg", label: "FullDishThali" },
          { path: "vegHakkaNoodles", img: "https://static.vecteezy.com/system/resources/previews/051/125/508/non_2x/delicious-fried-noodles-isolated-on-transparent-background-png.png", label: "Veg Hakka Noodles" },
          { path: "paneerButterMasala", img: "https://img.freepik.com/premium-photo/creamy-paneer-butter-masala-white-background_1188475-1813.jpg", label: "paneer Butter Masala" },
        ].map(({ path, img, label }) => (
          <Link to={`/FoodDetails/${path}`} key={path} className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={img}
                alt={label}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-gray-700">❮❮ {label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body3;
