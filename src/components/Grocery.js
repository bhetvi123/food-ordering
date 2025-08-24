import GrosaryData from "../utils/GrosaryData";
const Grocery = () =>{
    return(
 
    <div className="bg-gray-100 py-10 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Grocery Essentials</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {GrosaryData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-5 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold text-green-800">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <p className="text-sm text-gray-500 mb-1">Brand: {item.brand}</p>
            <p className="text-sm text-gray-500 mb-1">Category: {item.category}</p>

            <div className="flex items-center justify-between mt-3">
              <div className="text-green-600 font-semibold text-lg">₹{item.price}</div>
              <div className="text-gray-400 line-through text-sm">₹{item.originalPrice}</div>
            </div>

            <div className="flex justify-between items-center mt-3">
              <span className="flex items-center text-yellow-500 text-sm">
                <div className="mr-1" />
                {item.rating}
              </span>
              <button className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-sm">
                <div/> Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;