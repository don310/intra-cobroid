import React from "react";
import Header from "@/app/components/Header";

const Store = () => {
  const products = [
    {
      id: 1,
      name: "PW NAZARIYA Blue Ray Protection Glasses",
      description:
        "Stylish Zero Power Glasses for Men & Women | UV Filter Glasses | Computer Glasses for Eye Protection | Lightweight",
      price: 575,
      originalPrice: 2999,
      discount: 81,
      rating: 4.7,
      amazonLink: "https://www.amazon.com", // Replace with actual Amazon link
    },
    {
      id: 2,
      name: "750 ML Stainless Steel Water Bottle",
      description: "Durable and leak-proof stainless steel water bottle.",
      price: 299,
      originalPrice: 598,
      discount: 50,
      rating: 4.8,
      amazonLink: "https://www.amazon.com", // Replace with actual Amazon link
    },
    {
      id: 3,
      name: "PW Student Pride Cap",
      description: "Stylish cap for students showing their pride.",
      price: 199,
      originalPrice: 499,
      discount: 60,
      rating: 4.7,
      amazonLink: "https://www.amazon.com", // Replace with actual Amazon link
    },
  ];

  return (

    <div className="flex-1 ml-64">
    {/* Full-Width Fixed Header */}
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-md z-10">
      <Header />
    </div>

    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">🛠 310 STORE 🛠</h2>
        <p className="text-lg text-gray-600 mb-10">
          This is what I use to create my content. I am not sponsored by any of
          these companies.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular PW Merchandise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            >
              <h4 className="font-bold text-gray-800 mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-bold text-gray-800">
                  ₹{product.price} <span className="text-sm text-gray-500">(₹{product.originalPrice} original)</span>
                </p>
                <p className="text-sm text-gray-500">{product.discount}% OFF</p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-500">Rating: {product.rating} ⭐</p>
                <a
                  href={product.amazonLink}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Store;
