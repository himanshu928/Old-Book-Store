import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FeatureCard from "./components/FeatureCard";
import "./styles/featureCard.css";

function App() {
  const featureData = [
    {
      id: 1,
      title: "AI Book Recommendations",
      description: "Get the Best Book Suggestions",
      image: "src/assets/feature-img1.png",
    },
    {
      id: 2,
      title: "Smart Price Estimator",
      description: "AI-Based Fair Price for Your Books",
      image: "src/assets/feature-img2.png",
    },
    {
      id: 3,
      title: "Easy Exchange",
      description: "Connect with Other Students for Book Swapping",
      image: "src/assets/feature-img3.png",
    },
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Banner />
      <div className="feature-cards-container">
        {featureData.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
        <div className="heading-container">
          <h1>Popular Used Books</h1>
        </div>
      </div>
    </>
  );
}

export default App;
