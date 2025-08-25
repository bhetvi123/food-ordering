import { Link } from "react-router";
import userContext from "../utils/userContext";
import { useContext } from "react";

const Resturentcard2 = (props2) => {
  const { mokeData } = props2;
  const { loggedInUser } = useContext(userContext);

  const {
    img,
    id,
    name,
    city,
    costForTwo,
    averageRating,
    deliveryTime,
    
  } = mokeData?.data;

  return (
    <Link
      to={`/ResturenttMenu/${id || "default"}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 m-4 w-64">
        <img
          className="h-40 w-full object-cover rounded-xl mb-4"
          alt="res-logo2"
          src={img}
        />
        <div className="text-gray-800 space-y-1">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
          <h5 className="text-sm text-gray-500">{city}</h5>
          <h5 className="text-sm">₹{costForTwo / 100} for two</h5>
          <h5 className="text-sm text-yellow-600 font-medium">
            ⭐ {averageRating} stars
          </h5>
          <h5 className="text-sm text-gray-500">{deliveryTime} min</h5>
          <h5 className="text-sm text-blue-600">{loggedInUser}</h5>
        </div>
      </div>
    </Link>
  );
};

// ✅ Higher Order Component with Promoted Label
export const withPromotedLabel = (Resturentcard2) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute mt-12 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">
          PROMOTED
        </label>
        <Resturentcard2 {...props} />
      </div>
    );
  };
};

export default Resturentcard2;
