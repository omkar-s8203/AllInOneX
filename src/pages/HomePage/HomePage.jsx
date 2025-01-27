import "./HomaPage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Our Web App</h1>
      
      {/* Module Cards Section */}
      <div className="module-cards">
        {/* Instagram Card */}
        <div className="card instagram-card">
          <div className="card-header">
            <h2>InstBinsta</h2>
          </div>
          <div className="card-body">
            <img src="https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg" alt="InstBinsta" className="card-image" />
            <p>Explore posts, reels, stories, and more from your favorite creators.</p>
          </div>
          <div className="card-footer">
            <Link to="/insta" className="card-link">Go to InstBinsta</Link>
          </div>
        </div>

        {/* News Card */}
        <div className="card news-card">
          <div className="card-header">
            <h2>News</h2>
          </div>
          <div className="card-body">
            <img src="https://www.fda.gov/files/CDER-whatsnew.png" alt="News" className="card-image" />
            <p>Stay updated with the latest news and trends from around the world.</p>
          </div>
          <div className="card-footer">
            <Link to="/news" className="card-link">Go to News</Link>
          </div>
        </div>

        {/* Shop Card */}
        <div className="card shop-card">
          <div className="card-header">
            <h2>Shop</h2>
          </div>
          <div className="card-body">
            <img src="https://i0.wp.com/www.drukbees.com/wp-content/uploads/2019/01/shop.jpg?w=1672&ssl=1" alt="Shop" className="card-image" />
            <p>Browse and shop for your favorite products, from electronics to apparel.</p>
          </div>
          <div className="card-footer">
            <Link to="/shop" className="card-link">Go to Shop</Link>
          </div>
        </div>
      </div>

      {/* Weather Card */}
      <div className="weather-card">
        <div className="card-header">
          <h2>Weather</h2>
        </div>
        <div className="card-body">
          <img src="https://st.depositphotos.com/1903923/1678/v/450/depositphotos_16785893-stock-illustration-sunny-day-background.jpg" alt="Weather" className="card-image" />
          <p>Check your local weather updates to stay informed and prepared.</p>
          <div className="weather-info">
            <p>Location: New York</p>
            <p>Temperature: 22°C</p>
            <p>Condition: Sunny</p>
          </div>
        </div>
        <div className="card-footer">
          <Link to="/weather" className="card-link">Check Full Weather Details</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
