import React from 'react';
import CartButton from '../CartButton/CartButton';

const ProductCart = ({handleStatus , isActive}) => {
    return (
        <div className='text-orange-500 text-6xl bg-slate-200 py-20 text-center'>
            <h1>ProductCart container</h1>
            <CartButton handleStatus={handleStatus} isActive={isActive}></CartButton>
        </div>
    );
};

export default ProductCart;