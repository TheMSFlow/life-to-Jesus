import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '../../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SocialSignIn = () => {
    const navigate = useNavigate();

    const handleSocialSignIn = async (provider) => {
        try {
          await signInWithPopup(auth, provider);
          localStorage.setItem('loggedIn', 'true');
          navigate('/bible');
        } catch (error) {
          alert('Error during social sign-in: ' + error.message);
        }
      };

  return (
    <>
    <div className='flex flex-row gap-4'>
        <div className='cursor-pointer'
        onClick={() => handleSocialSignIn(googleProvider)}>
            <img src='/google.svg' alt="Sign in with Google" />
        </div>
        <div className='cursor-pointer'
        onClick={() => handleSocialSignIn(facebookProvider)}>
            <img src='/facebook.svg' alt="Sign in with Facebook" />
        </div>
    </div>
    </>
  )
}

export default SocialSignIn