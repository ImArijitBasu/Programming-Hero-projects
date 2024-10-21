import React from 'react';
import profileImg from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 py-3'>
            <p className='text-3xl font-bold text-slate-700'>KNOWLEDGE CAFE</p>
            <p><img src={profileImg} alt="" /></p>
        </div>
    );
};

export default Header;