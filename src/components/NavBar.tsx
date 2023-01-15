import { FC, useCallback, useState } from 'react';
import { IMAGES } from '../utils/constants';
export const NavBar: FC = () => {
  const [user, setUser] = useState(false);

  const googleSignIn = useCallback(() => {
    setUser(true);
  }, []);

  const signOut = useCallback(() => {
    setUser(false);
  }, []);

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in" type="button">
          <img onClick={googleSignIn} src={IMAGES.googleSignInBtn} alt="sign in with google" />
        </button>
      )}
    </nav>
  );
};
