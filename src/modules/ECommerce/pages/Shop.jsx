import "./shop.css";
// import "./JS/index.js";


function shop() {
  return (
    <>
     
      <div className="hero-section">
        <div className="hero-message">
          <p>
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery.{" "}
            <a href="#">Click here to go to amazon.in</a>
          </p>
        </div>
      </div>

      {/* Product Section */}
      <div className="product">
        <div className="product-message">
          <p>Top picks for your home</p>
        </div>
      </div>

      {/* Shop Section */}
      <div className="shop-section">
        {[...Array(4)].map((_, index) => (
          <div className="box1 box" key={index}>
            <div className="box-content">
              <h2>Health & Personal Care</h2>
              <div
                className="box-img"
                style={{
                  backgroundImage: `url(https://images-eu.ssl-images-amazon.com/images/G/08/warehouse-deals/off_cycle_10_HP_24Q4_desktop_379x304._SY304_CB544485942_.jpg)`,
                }}
              ></div>
              <p>See More</p>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-section">
        {[...Array(4)].map((_, index) => (
          <div className="box1 box" key={index + 4}>
            <div className="box-content">
              <h2>Health & Personal Care</h2>
              <div
                className="box-img"
                style={{
                  backgroundImage: `url(https://images-eu.ssl-images-amazon.com/images/G/08/EU-STORES/2024/SL/Q4/12Dec/WinterSales/EU5/BxGy/Exp_HP_Dt_Cat_Card_379x304_25kb._SY304_CB552797205_.jpg)`,
                }}
              ></div>
              <p>See More</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-box">
            <h3>Get to Know Us</h3>
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Tours</p>
          </div>
          <div className="footer-box">
            <h3>Make Money with Us</h3>
            <p>Sell products on Amazon</p>
            <p>Sell on Amazon Handmade</p>
            <p>Product and Build Your Brand</p>
            <p>Associates Programme</p>
            <p>Fulfillment by Amazon</p>
            <p>Supply to Amazon</p>
            <p>Advertise Your Product</p>
            <p>Independently Publish with Us</p>
            <p>Amazon Pay</p>
            <p>See More Make Money With Us</p>
          </div>

          <div className="footer-box">
            <h3>Amazon Payment Methods</h3>
            <p>Amazon Business Amex Card</p>
            <p>Payment Method Help</p>
            <p>Amazon Currency Converter</p>
            <p>Gift Cards</p>
            <p>Top up Your Account</p>
            <p>Top up Your Account in Store</p>
          </div>

          <div className="footer-box">
            <h3>Let Us Help You</h3>
            <p>Track Package or View Orders</p>
            <p>Delivery Rates & Policies</p>
            <p>Returns & Replacements</p>
            <p>Legal Guarantee</p>
            <p>Recalls and Product Safety Alerts</p>
            <p>Recycling</p>
            <p>Amazon Mobile App</p>
            <p>Customer Service</p>
            <p>Accessibility</p>
            <p>Gift List</p>
            <p>Report Illegal Content</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default shop;
