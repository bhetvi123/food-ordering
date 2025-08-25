import { useRef, useContext, useEffect, useState } from "react";
import ShimmerBody from "../shimmers/ShimmerBody";
import Resturentcard from "./ResturentCard";
import userContext from "../utils/userContext";

const Body = () => {
  console.log("body function");
  const { loggedInUser, setUserInfo } = useContext(userContext);

  const [showPrompt, setShowPrompt] = useState(false);
  const [tempName, setTempName] = useState("");

  // Ask for name on first load if not set
  useEffect(() => {
    if (!loggedInUser) {
      setShowPrompt(true);
    }
  }, [loggedInUser]);

  const slideRef = useRef(null);
  const handleNext = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".item");
    if (items.length > 0) {
      slide.appendChild(items[0]); // move first to end
    }
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".item");
    if (items.length > 0) {
      slide.prepend(items[items.length - 1]); // move last to start
    }
  };

  if (Resturentcard.length === 0) {
    return <ShimmerBody />;
  }

  return (
    <div className="body bg-white min-h-screen px-4 sm:px-6 lg:px-12">
      {/* Prompt Modal */}
      {showPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center w-[90%] sm:w-96">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Enter Your Name
            </h2>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded-md text-base mb-4"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="Type your name"
            />
            <div className="flex justify-center space-x-4">
              <button
                className="px-4 sm:px-5 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
                onClick={() => setShowPrompt(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 sm:px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
                onClick={() => {
                  setUserInfo(tempName);
                  setShowPrompt(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show current user + change button */}
      <div className="search mt-16 sm:mt-2 mb-8 sm:mb-12 text-center">
        <h2 className="text-base pt-10 sm:text-lg font-semibold mb-2">
          Welcome {loggedInUser || "Guest"} 👋
        </h2>
        <button
          className="px-4 sm:px-5 py-2 bg-pink-600 text-white rounded-md text-sm sm:text-base hover:bg-pink-700 transition"
          onClick={() => {
            setTempName(loggedInUser);
            setShowPrompt(true);
          }}
        >
          Change Name
        </button>
      </div>

      {/* Navigation Buttons + Carousel */}
      <div className="flex items-center justify-center relative">
        {/* Prev Button */}
        <button
          className="w-8 sm:w-10 h-8 sm:h-9 rounded-md border border-black mx-1 transition hover:bg-gray-400 hover:text-white"
          onClick={handlePrev}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        {/* Carousel Container */}
        <div className="container relative w-full sm:w-[700px] lg:w-[1000px] h-[300px] sm:h-[400px] lg:h-[480px] mx-auto shadow-[0_20px_40px_rgba(0,0,0,0.3)] bg-cover bg-center overflow-hidden mt-6 sm:mt-8 rounded-xl">
          <div
            className="slide relative w-full h-full flex items-center"
            ref={slideRef}
          >
            {/* Restaurant Cards */}
            <Resturentcard
              resId="agashiye"
              resname="Agashiye"
              cuisine="Address: the house of MG sidi saiyyed mosque, Old City, Gheekanta, Lal Darwaja, Ahmedabad, Gujarat 380001 (famous for: Masala dosa)"
              star="4.6⭐⭐⭐⭐☆ (5.8K)"
              min="38 minutes"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s"
            />
            <Resturentcard
              resId="global-kitchen"
              resname="650 - The Global Kitchen"
              cuisine="Address: Shreekunj Mandapam, Beside Golden Tulip Bunglows & Tulip Citadel, Ahmedabad, Gujarat 380015 (famous for: Dal makhani)"
              star="4 ⭐⭐⭐⭐☆ (6.1K)"
              min="28 minutes"
              img="https://thethekedaar.in/blogs/wp-content/uploads/2021/03/Restaurant-Interior.jpg"
            />
            <Resturentcard
              resId="panthi-garden"
              resname="Panthi Garden Restaurant"
              cuisine="Address: Opp. Keyur Park Society, near Beti Bachao Garden, Nikol, Ahmedabad, Gujarat 382350 (famous for: Dahi vada)"
              star="3 ⭐⭐⭐☆☆ (1.1K)"
              min="38 minutes"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZWxF857wSQn-JXkXtibHxZpX4xmyj1p6tA&s"
            />
            <Resturentcard
              resId="sky-heaven"
              resname="The Sky Heaven"
              cuisine="Address: A, The Sky Heaven, 607, Nikol - Naroda Rd, opp. Pushkar Icon, New Naroda, Nikol, Ahmedabad, Gujarat 382345 (famous for: Aloo tikki)"
              star="2⭐⭐☆☆☆ (5.1K)"
              min="38 minutes"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZoihLMIAVd57Nqq_mJbpk5dh82QE99PgU8g&s"
            />
            <Resturentcard
              resId="lime-tree"
              resname="The Lime Tree"
              cuisine="Address: Terrace, SK Lords Inn Hotel, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad, Gujarat 380009 (famous for: Curried burger)"
              star="1 ⭐☆☆☆☆ (2.1K)"
              min="39 minutes"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxO_1UKBVD5kmtD3iGNtG7aaBZ6zgx84X5nQ&s"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          className="w-8 sm:w-10 h-8 sm:h-9 rounded-md border border-black mx-1 transition hover:bg-gray-400 hover:text-white"
          onClick={handleNext}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Body;
