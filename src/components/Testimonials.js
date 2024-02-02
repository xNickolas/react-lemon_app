import React from 'react';
import testimonials from '../testimonials';
import starIcon from '../assets/icon-star.png';

const Testimonials = () => {
    return (
        <div className='testimonials-container'>
            <div className='testimonials-header'>
                <h2>What our costumers say!</h2>
            </div>

            <div className='testimonials-wrapper'>
            {
                    testimonials.map(testimonial => <div key={testimonial.id} className='card'>
                        <div>
                            <img className='star-icon' src={starIcon}></img>
                            <img className='star-icon' src={starIcon}></img>
                            <img className='star-icon' src={starIcon}></img>
                            <img className='star-icon' src={starIcon}></img>
                            <img className='star-icon' src={starIcon}></img>
                        </div>
                        <div className='testimonial-author'>
                            <div className='testimonial-author-thumbnail'>
                                <img className='' src={testimonial.image} alt='' />
                            </div>
                            <p>
                                <strong>{testimonial.name}</strong>
                                <span>{testimonial.title}</span>
                            </p>
                        </div>
                        <div className='testimonial-description'>
                            <p>{testimonial.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonials;