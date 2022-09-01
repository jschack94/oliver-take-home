import React from 'react';
import './Rating.scss';

function Rating({ rating, setRating, id = '' }) {

  const onRatingChange = (e) => {
    if (setRating) {
      setRating(e.currentTarget.value)
    }
  }

  const styles = {

  }

  return (
    <div className="utility_star">
      <div className="container">
        <div className="feedback">
          <div className="rating">
            <input className='rating' type="radio" name="rating"  {...(rating === 5 ? { checked: 'checked' } : {})} value={5} id={`rating-5`} onChange={onRatingChange} />
            <label htmlFor={`rating-5`} />
            <input className='rating' type="radio" name="rating" {...(rating === 4 ? { checked: 'checked' } : {})} value={4} id={`rating-4`} onChange={onRatingChange} />
            <label htmlFor={`rating-4`} />
            <input className='rating' type="radio" name="rating" {...(rating === 3 ? { checked: 'checked' } : {})} value={3} id={`rating-3`} onChange={onRatingChange} />
            <label htmlFor={`rating-3`} />
            <input className='rating' type="radio" name="rating" {...(rating === 2 ? { checked: 'checked' } : {})} value={2} id={`rating-2`} onChange={onRatingChange} />
            <label htmlFor={`rating-2`} />
            <input className='rating' type="radio" name="rating" {...(rating === 1 ? { checked: 'checked' } : {})} value={1} id={`rating-1`} onChange={onRatingChange} />
            <label htmlFor={`rating-1`} />
            
          </div>
        </div>
      </div>
    </div >



  )
}

export default Rating