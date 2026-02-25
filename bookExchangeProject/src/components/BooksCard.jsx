import React from 'react'
import "../styles/booksCard.css"

function BooksCard({ title, description, image }) {
  return (
    <div className="books-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View Details</button>
    </div>
  )
}

export default BooksCard
