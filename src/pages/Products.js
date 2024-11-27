
import React from "react";
import "./Products.css";

function Products() {
  const services = [
    "Envelopes",
    "Pamphlets",
    "Visiting Cards",
    "ID Cards",
    "Books",
    "Letter Heads",
    "Stickers",
  ];

  return (
    <div className="products">
      <h2>Our Products & Services</h2>
      <div className="cards">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
