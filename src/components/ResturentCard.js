// Restaurant Card Component
const Resturentcard = ({ resname, cuisine, star,min ,img,fontSizeh3}) => {
  return (
    <div className="item">
    <div>
      <img className="ress-logo" alt="res-logo" src={img} />
      </div>
      <div className="content">
      <h3 className={`name ${fontSizeh3}`} >{resname}</h3>
      <h5 className="des">{cuisine}</h5>
      <h5 className="des">{star}</h5>
      <h5 className="des">{min}</h5>
    </div>
    </div>
  );
};


export default Resturentcard;