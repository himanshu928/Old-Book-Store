import React from "react";
import "../styles/bookFinder.css";

function BookFinder() {
  return (
    <div className="book-finder-section">
      <h1>AI Book Finder</h1>
      <p>Find the Perfect Book for Your Studies</p>
      <div className="book-finder-container">
        <select name="class" id="class-select">
          <option value="Class 10th">10th</option>
          <option value="Class 12th">12th</option>
          <option value="Engineering">Engineering</option>
          <option value="Medical">Medical</option>
          <option value="Other">Other</option>
        </select>
        <select name="subject" id="subject-select">
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Other">Other</option>
        </select>
        <select name="Board" id="category-select">
          <option value="UP Board">UP Board</option>
          <option value="CBSE Board">CBSE Board</option>
          <option value="Study Guides">Study Guides</option>
          <option value="Reference Books">Reference Books</option>
          <option value="Other">Other</option>
        </select>
        <button>Get Recommendations</button>
      </div>
    </div>
  );
}

export default BookFinder;
