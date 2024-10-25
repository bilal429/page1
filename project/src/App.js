import React from 'react'
import './App.css'
import cardImage1 from './Assets/photo_1.png';
import cardImage2 from './Assets/photo_2.png';
import cardImage3 from './Assets/photo_3.png';
export default function App() {
  return (
    <div className="container">
      <h1 id='heading'>Quality feedbacks for<br /> your SaaS products</h1>
      <h3 className='h31'>The blocks & components you need</h3>
      <div  className="main">
        <div className="card">
                <div  className="logo">
                ✋
                </div>
          <div className="card-content">
            <h3 className="card-title">Collect Feedback at Multiple<br/> Touchpoints</h3>
            <p className="card-text">
            Provide a comprehensive <br/>understanding of the customer experience.
            </p>
            <img src={cardImage1} alt="Card image" className="card-image" />
          </div>
        </div>
        <div className="card">
        <div  className="logo">
        🥅
                </div>
          <div className="card-content">
            <h3 className="card-title">Ask Targeted and Specific<br/> Questions</h3>
            <p className="card-text">
            Avoid vague or open-ended <br/>questions that may not yield<br/> actionable insights.
            </p>
            <img src={cardImage2} alt="Card image" className="card-image" />
          </div>
        </div>
        <div className="card">
        <div  className="logo">
        💬
                </div>
          <div className="card-content">
            <h3 className="card-title">Prioritize and Respond to<br/> Feedback</h3>
            <p className="card-text">
            Communicate the changes or improvements you've made in<br/> response to their feedback.
            </p>
            <img src={cardImage3} alt="Card image" className="card-image" />
          </div>
        </div>
      </div>
    </div>
  )
}
