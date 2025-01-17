"use client"
import React,{useEffect,useState}from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
    const [isAdminAuthenticated,setAdminAuthenticated]=useState(false);
  return (
    <div className='navbar'>
        <Image src={logo} alt="Logo" width={100} className='logo'/>
        <div className='adminlinks'>
            {isAdminAuthenticated ? (
                <>
             <Link href='/pages/addworkout'>Add Workout</Link>
                </>
            ) : (
                <>
                {/*show login/signup links for unauthenticated admin*/}
                <Link href='/adminauth/login'>Login</Link>
                <Link href='/adminauth/register'>Signup</Link>
                </>
            )}
        </div>
    </div>
  )
}

export default Navbar
