import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'shared/config/firebase';
export const useFirebaseAuth = () => {
  const [user, loading, error] = useAuthState(auth);

  return {
    user,
    loading,
    error
  };
};
