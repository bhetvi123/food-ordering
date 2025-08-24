const ShimmerFoodDetails = () => {
    return(
        <div className="shimmer-food-details">
            <div className="shimmer-food-header">
                <div className="shimmer-food-detail-image"></div>
                <div className="shimmer-food-detail-title"></div>
            </div>
            
            <div className="shimmer-food-detail-info">
                <div className="shimmer-food-detail-line"></div>
                <div className="shimmer-food-detail-line"></div>
                <div className="shimmer-food-detail-line"></div>
                <div className="shimmer-food-detail-line"></div>
            </div>
            
            <div className="shimmer-section-title"></div>
            <div className="shimmer-restaurant-list">
                {Array(3).fill().map((_, index) => (
                    <div key={index} className="shimmer-restaurant-item">
                        <div className="shimmer-restaurant-name"></div>
                        <div className="shimmer-restaurant-time"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ShimmerFoodDetails;
