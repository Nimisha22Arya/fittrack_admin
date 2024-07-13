"use client";
import React, { useState } from 'react';
import '../auth.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signuppage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      if (response.ok) {
        const data=await response.json();
        console.log('Admin login successful', data);

        toast.success('Admin Login Successful', {
          position: 'top-center',
        });
        window.location.href='/pages/addworkout';
      } else {
        console.error('Admin login failed', response.statusText);

        toast.error('Admin Login Failed', {
          position: 'top-center',
        });
      }
    } 
    catch (error) {
      toast.error('An error occurred during registration', {
        position: 'top-center',
      });
      console.error('An error occurred during registration', error);
    }
  };

  return (
    <div className='formpage'>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Sign in</button>
      <ToastContainer /> {/* Ensure ToastContainer is rendered */}
    </div>
  );
};

export default Signuppage;
