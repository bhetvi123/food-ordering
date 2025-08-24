import { useRef, useContext } from "react";
import ShimmerBody from "../shimmers/ShimmerBody";
import Resturentcard from "./ResturentCard";
import userContext from "../utils/userContext";

const Body = () => {
  console.log("body function");

  const slideRef = useRef(null);

  const handleNext = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".item");
    if (items.length > 0) {
      slide.appendChild(items[0]); // move first to end
    }
  };

  const handlePrev = () => {
    console.log("body function");
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".item");
    if (items.length > 0) {
      slide.prepend(items[items.length - 1]); // move last to start
    }
  };

  const { loggedInUser, setUserInfo } = useContext(userContext);

  if (Resturentcard.length === 0) {
    return <ShimmerBody />;
  }

  return (
    <div className="body bg-white-100 min-h-screen py-10">
      {/* Filter/Search */}
      <div className="search mt-24 mb-12 text-center">
        <input
          type="text"
          className=" py-2 border border-white-300 rounded-md text-base w-64 mr-2"
          value={loggedInUser}
          onChange={(e) => {
            setUserInfo(e.target.value);
          }}
        />
        <button className="px-5 py-2 bg-pink-600 text-white rounded-md text-base hover:bg-pink-700 transition">
          Play and Order:
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="button text-center mt-6">
        <button
          className="w-10 h-9 rounded-md border border-black mx-1 transition hover:bg-gray-400 hover:text-white"
          onClick={handlePrev}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="w-10 h-9 rounded-md border border-black mx-1 transition hover:bg-gray-400 hover:text-white"
          onClick={handleNext}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Slide Container */}
      <div className="container relative w-[1000px] h-[480px] mx-auto shadow-[0_30px_50px_rgba(0,0,0,0.3)] bg-cover bg-center overflow-hidden mt-8">
        <div
          className="slide relative w-full h-full"
          ref={slideRef}
        >
          <Resturentcard
            resId="agashiye"
            resname="Agashiye"
            cuisine="Address: the house of MG sidi saiyyed mosque, Old City, Gheekanta, Lal Darwaja, Ahmedabad, Gujarat 380001((famous for:Masala dosa))"
            star="4.6⭐⭐⭐⭐☆ (5.8K)"
            min="38 minutes"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3V_QmFRmB8xPPSOmShms0tMMMAH1G9i7pg&s"
          />
          <Resturentcard
            resId="global-kitchen"
            resname="650 - The Global Kitchen"
            cuisine="Address: Shreekunj Mandapam, Beside Golden Tulip Bunglows & Tulip Citadel, Ahmedabad, Gujarat 380015((famous for:Dal makhani))"
            star=".4 ⭐⭐⭐⭐☆ (6.1K)"
            min="28 minutes"
            img="https://thethekedaar.in/blogs/wp-content/uploads/2021/03/Restaurant-Interior.jpg"
            fontSizeh3="text-10px"
          />
          <Resturentcard
            resId="panthi-garden"
            resname="Panthi Garden Restaurant"
            cuisine="Address: Opp. Keyur Park Society, near Beti Bachao Garden, Nikol, Ahmedabad, Gujarat 382350((famous for:Dahi vada))"
            star=".3 ⭐⭐⭐☆☆ (1.1K)"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZWxF857wSQn-JXkXtibHxZpX4xmyj1p6tA&s"
          />
          <Resturentcard
            resId="sky-heaven"
            resname="The Sky Heaven"
            cuisine="Address: A, The Sky Heaven, 607, Nikol - Naroda Rd, opp. Pushkar Icon, New Naroda, Nikol, Ahmedabad, Gujarat 382345((famous for:Aloo tikki))"
            star=".2⭐⭐☆☆☆(5.1K)"
            min="38 minutes"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZoihLMIAVd57Nqq_mJbpk5dh82QE99PgU8g&s"
          />
          <Resturentcard
            resId="lime-tree"
            resname="The Lime Tree"
            cuisine="Address: Terrace, SK Lords Inn Hotel, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad, Gujarat 380009((famous for:11Curried burger. ...))"
            star=".1 ⭐☆☆☆☆(2.1K)"
            min="39 minutes"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxO_1UKBVD5kmtD3iGNtG7aaBZ6zgx84X5nQ&s"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
