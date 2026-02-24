import React from 'react'
import "../styles/featureCard.css"

function FeatureCard(props) {
  return (
    <div className='feature-card-container'>
      <img src={props.image} alt="" />
      <div className='content-container'>
        <h2>{props.title}</h2>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
