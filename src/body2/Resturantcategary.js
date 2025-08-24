import ItemList from "./ItemLIst";
// import { useState } from "react";

 const Resturantcategary = ({menuItems,showItems,setShowIndex,dummy}) => {
//     const[showItems,setShowItems]=useState(false);
     
    const handleclick=()=>{
    //   console.log("clicked");
    //   setShowItems(!showItems);
    setShowIndex(showItems); //its controlled components.
     }

  return (
    <div>
    {/* Header */}
        <div className="rescategary">
            <span className="res-text">if you pay 100rs one mistry item for you:{menuItems.gender}</span>
            <button className="res-arrow"  onClick={handleclick}>📦⬇️</button>
        </div>
    {/* accordion body*/}
        {showItems && <ItemList dummy={dummy} items={menuItems}/>  }
    </div>
  );
};

export default Resturantcategary;