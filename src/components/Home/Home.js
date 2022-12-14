import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import bike from '../../img/bike.png';
import './Home.css';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const firstThreeReviews = reviews.slice(0, 3);
  return (
    <div>
      <section className="container">
        <div className="intro">
          <h1>Your next Bike</h1>
          <h1 style={{ color: '#3f65ff' }}>Your best Bike</h1>
          <p>Yamaha r15 v4 is my dream bike.When you are riding this bike you feels like you are riding superb bike.The new technology is another level. When you maintain company services.Yamaha r15 v4 give mileage upto 50-55.The new bike is very huge technology like bluetooth connection, Cooling fan and seating positions. This bike looks in front like the lions eyes.</p>
          <button>Learn More</button>
        </div>
        <div className="img-box">
          <img src={bike} alt="Bike" />
        </div>
      </section>
      <section className='reviews-container'>
        <h2>Customer Reviews</h2>
        <div className='reviews'>
          {
            firstThreeReviews.map(review => <div key={review.id}>
              <img src={review.img} alt="" />
              <h2>Name: {review.name}</h2>
              <p>Review: {review.review}</p>
              <h5>Ratting: {review.ratting}</h5>
            </div>)
          }
        </div>
        <Link className='btn' to='/reviews'>See All Reviews</Link>
      </section>
    </div>
  );
};

export default Home;