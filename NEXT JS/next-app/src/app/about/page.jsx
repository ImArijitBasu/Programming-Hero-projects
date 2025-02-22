"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {
    const router = useRouter() //! from next/navigation
    const isLoggedIn = true;
    const handleNavigation = () =>{
        if(isLoggedIn){
            router.push("/about/address");
        } else{
            router.push("/")
        }
    }
    return (
        <div>
            <p>about page</p>
            <Link href={"/about/address"}>Address</Link>
            <br />
            <button typeof='button' onClick={handleNavigation}>address page</button>
        </div>
    );
};

export default About;