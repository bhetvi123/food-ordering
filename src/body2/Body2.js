import Resturentcard2, { withPromotedLabel } from "./ResturentCard2";
import mokeData from "../utils/mokeData";
import { useEffect, useState } from "react";
import ShimmerBody2 from "../shimmers/ShimmerBody2";

const Body2 = () => {
  console.log("body2 function");

  const [listOfResturant, setlistOfResturant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [buttonsearch, setbuttonsearch] = useState("");

  const RestrentCardPromoted = withPromotedLabel(Resturentcard2);
  console.log(listOfResturant);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    setlistOfResturant(mokeData);
    setFilteredRestaurants(mokeData);
  };

  if (listOfResturant.length === 0) {
    return <ShimmerBody2 />;
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Offers for You:</h1>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 justify-center">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Search restaurant..."
          value={buttonsearch}
          onChange={(e) => {
            setbuttonsearch(e.target.value);
          }}
        />
        <div className="flex gap-2 flex-wrap justify-center">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition"
            onClick={() => {
              const filteredresturent = listOfResturant.filter((res) =>
                res.data.name.toLowerCase().includes(buttonsearch.toLowerCase())
              );
              setFilteredRestaurants(filteredresturent);
            }}
          >
            Search
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
            onClick={() => {
              const filterdList = listOfResturant.filter((res) => res.data.averageRating > 4);
              setFilteredRestaurants(filterdList);
            }}
          >
            Top Rated
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
            onClick={() => {
              setFilteredRestaurants(listOfResturant);
              setbuttonsearch("");
            }}
          >
            Show All
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((resturent) =>
          resturent.data.promoted ? (
            <RestrentCardPromoted key={resturent.data.id} mokeData={resturent} />
          ) : (
            <Resturentcard2 key={resturent.data.id} mokeData={resturent} />
          )
        )}
      </div>
    </div>
  );
};

export default Body2;
