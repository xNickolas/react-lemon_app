import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';
import deliveryIcon from '../assets/delivery-bike.png';

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "id is clicked!");

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Ordered!",
                    text: "Your order has been processed.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='menu-container' id='menu'>
            <div className='menu-header'>
                <h2>This Weeks Specials</h2>
                <button className='button-secondary'>Menu</button>
            </div>

            <div className='menu-wrapper'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img className='card-img-top' src={recipe.image} alt='' />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>${recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>

                            <a className='order-btn' onClick={() => handleOrder(recipe.id)}>
                                Order a delivery
                                <img className='delivery-icon' src={deliveryIcon}></img>
                            </a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;