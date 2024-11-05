import { useState, useEffect } from 'react';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  return { user };
};

export default useAuth;
