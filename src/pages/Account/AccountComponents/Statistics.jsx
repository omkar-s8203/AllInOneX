import React from "react";
import { FaUsers, FaComments, FaEye, FaShoppingCart } from "react-icons/fa";

const Statistics = () => {
  const stats = [
    { label: "Total Followers", count: 1200, icon: <FaUsers className="text-primary" /> },
    { label: "New Comments", count: 150, icon: <FaComments className="text-success" /> },
    { label: "Viewers", count: 2500, icon: <FaEye className="text-info" /> },
  ];

  const additionalInfo = {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    shoppingCartCount: 5,
  };

  return (
    <div className="mb-4">
      {/* Top Section: Key Statistics */}
      <div className="row mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-md-4 mb-3">
            <div className="d-flex align-items-center p-3 bg-light border rounded">
              <div className="me-3">{stat.icon}</div>
              <div>
                <h6 className="mb-1">{stat.label}</h6>
                <p className="mb-0 fw-bold">{stat.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Quote and Shopping Cart */}
      <div className="row">
        {/* Quote for the Day */}
        <div className="col-12 col-md-6 mb-3">
          <div className="p-3 bg-light border rounded">
            <h6 className="mb-2">Quote of the Day</h6>
            <p className="mb-0 fst-italic">"{additionalInfo.quote}"</p>
          </div>
        </div>

        {/* Shopping Cart Count */}
        <div className="col-12 col-md-6 mb-3">
          <div className="d-flex align-items-center p-3 bg-light border rounded">
            <FaShoppingCart className="text-warning me-3" size={30} />
            <div>
              <h6 className="mb-1">Items in Cart</h6>
              <p className="mb-0 fw-bold">{additionalInfo.shoppingCartCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
