import React from 'react';
import Cart from './Cart';
import About from './About';

const CartButton = ({handleStatus , isActive}) => {
    const {cart} = isActive;
    
    return (
        <>
        <div className='w-2/3 mx-auto flex justify-between items-center border-2 border-red-600'>
            <p onClick={()=>{handleStatus('cart')}} className={cart ? `bg-blue-800` : `bg-transparent`}>Cart</p>
            <p onClick={()=>handleStatus('about')} className={!cart ? `bg-blue-800` : `bg-transparent`}> About</p>
            
        </div>
        {
            isActive.cart ? <Cart></Cart> : <About></About>
        }
        </>
    );
};

export default CartButton;