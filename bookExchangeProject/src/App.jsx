import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FeatureCard from "./components/FeatureCard";
import "./styles/featureCard.css";
import BooksCard from "./components/BooksCard";
import BookFinder from "./components/BookFinder";
import Footer from "./components/Footer";

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

  const BooksData = [
    {
      id: 1,
      title: "Chemistry for Class 12th",
      description: "₹150 Starting",
      image: "src/assets/Book1.jpg",
    },
    {
      id: 2,
      title: "Artificial Intelligence for Class 10th",
      description: "₹200 Starting",
      image: "src/assets/Book2.jpg",
    },
    {
      id: 3,
      title: "Mathematics for Class 10th",
      description: "₹180 Starting",
      image: "src/assets/Book3.jpg",
    },
    {
      id: 4,
      title: "Last Minutes Hacks for Class 12th",
      description: "₹120 Starting",
      image: "src/assets/Book5.jpg",
    }
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
       
      </div>
       <div className="heading-container">
          <h1>Popular Used Books</h1>
        </div>
        <div className="books-card-container">
          {BooksData.map((book) => (
            <BooksCard
              key={book.id}
              title={book.title}
              description={book.description}
              image={book.image}
            />
          ))}
          
        </div>
        <BookFinder /> 
        <Footer />
    </>
    
  );
}

export default App;
