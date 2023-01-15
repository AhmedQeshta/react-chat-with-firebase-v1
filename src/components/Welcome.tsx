import { useCallback } from 'react';
import { IMAGES } from '../utils/constants';

export const Welcome = () => {
  const googleSignIn = useCallback(() => {}, []);

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in" type="button">
        <img onClick={googleSignIn} src={IMAGES.googleSignInBtn} alt="sign in with google" />
      </button>
    </main>
  );
};
