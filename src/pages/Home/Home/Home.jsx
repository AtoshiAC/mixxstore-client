import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import Payments from "./Payments";
import Marquee from "react-fast-marquee";

const Home = () => {
    useTitle("Home");
    return (
      <div>
        <Banner />
        <Gallery />
        <ShopCategory />

        {/* Review section */}
        <section className="mb-8">
          <h2 className="text-5xl text-center font-bold mb-4">Most Reviews</h2>
          <div className="max-w-5xl mx-auto rounded-lg shadow-md p-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">User Feedback</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-700">
                    "I purchased a basketball and it exceeded my expectations.
                    The quality is amazing, and it has improved my shooting
                    skills. Highly recommended!"
                  </p>
                  <p className="mt-2 text-gray-500">- John Doe</p>
                </div>
              </div>
              <div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-700">
                    "I bought a soccer ball for my son, and he absolutely loves
                    it! The design is vibrant, and it's holding up well even
                    after hours of playtime."
                  </p>
                  <p className="mt-2 text-gray-500">- Jane Smith</p>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Leave Your Feedback
            </button>
          </div>
        </section>

        {/* Stats section */}
        <section className="mb-8 text-center">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Total Products</div>
              <div className="stat-value">91</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">Seller</div>
              <div className="stat-value">10</div>
              <div className="stat-desc">↘︎ 40 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Daily Visitors</div>
              <div className="stat-value">1.2K</div>
              <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>
          </div>
        </section>

        {/* Delivery & partners */}
        <section className="mb-8">
          <h2 className="text-5xl text-center font-bold mb-4">
            Delivery & Payments
          </h2>
          <div className="max-w-7xl mx-auto rounded-lg shadow-md p-8">
            <p className="text-white text-center">
              Welcome to our sports toy store! We offer a wide range of sports
              toys and equipment for all ages and skill levels. Whether you're
              looking for a basketball hoop, soccer ball, or tennis racket,
              we've got you covered. Our products are made with high-quality
              materials to ensure durability and performance. Browse through our
              collection and find the perfect sports toy to elevate your game!
            </p>
            <div className="mt-6 flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">Delivery Partners</h3>
                <ul className="mt-2">
                  <li className="text-white">Fast &amp; Reliable Shipping</li>
                  <li className="text-white">
                    Free Shipping on Orders over $50
                  </li>
                  <li className="text-white">Express Delivery Option</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Payment Partners</h3>
                <ul className="mt-2">
                  <li className="text-white">Secure Online Payments</li>
                  <li className="text-white">Multiple Payment Methods</li>
                  <li className="text-white">Easy Returns &amp; Refunds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Marquee>
          <Payments />
        </Marquee>
      </div>
    );
};

export default Home;