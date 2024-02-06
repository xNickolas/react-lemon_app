import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';
import lemonOne from '../assets/restaurant.jpg';
import lemonTwo from '../assets/chef.jpg';
import lemonThree from '../assets/hero-form.jpg';


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    

    return (
        <header>
            <section className='hero'>
                <div className='hero-form'>
                    <h2>Reservations</h2>
                    <h3>Little Lemon</h3>
                    <p>
                        Reserve your table below, fill in the form with the details of your occasion and we'll send the confirmation to your e-mail address
                    </p>
                </div>
            </section>
            <section className='form-container'>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='form-wrapper'>
                            <div className='row justify-center'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label htmlFor='book-date' className='form-label'>Choose Date:</label>
                                        <input id='book-date' className='form-control' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='book-time' className='form-label'>Choose Time:</label>
                                        <div className='p-relative'>
                                            <FontAwesomeIcon icon={faClock} className="occasion-icon" />
                                            <select id='book-time' className='form-select' value={times} onChange={(e) => setTimes(e.target.value)}>
                                                <option value="">Select a time</option>
                                                {
                                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label htmlFor='book-guests' className='form-label'>Number of Guests:</label>
                                        <div className='p-relative'>
                                            <FontAwesomeIcon icon={faUsers} className="occasion-icon" />
                                            <select id='book-guests' className='form-select' key={guests} value={guests} onChange={(e) => setGuests(e.target.value)}>
                                                <option value="">
                                                    No. of Guests
                                                </option>
                                                <option>1 Guest</option>
                                                <option>2 Guests</option>
                                                <option>3 Guests</option>
                                                <option>4 Guests</option>
                                                <option>5 Guests</option>
                                                <option>6 Guests</option>
                                                <option>7 Guests</option>
                                                <option>8 Guests</option>
                                                <option>9 Guests</option>
                                                <option>10 Guests or More</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='book-occasion' className='form-label'>Occasion:</label>
                                        <div className='p-relative'>
                                            <FontAwesomeIcon icon={faGlassCheers} className="occasion-icon" />
                                            <select id='book-occasion' className='form-select' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                                <option value="">Choose your occasion</option>
                                                <option>Birthday</option>
                                                <option>Anniversary</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 text-center'>
                                    <div className='form-images'>
                                        <img  src={lemonOne}></img>
                                        <img src={lemonTwo}></img>
                                        <img  src={lemonThree}></img>
                                    </div>
                                    <div className='button-send-reservation'>
                                        <input aria-label='On Click' type='submit' value={"Make your reservation"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;