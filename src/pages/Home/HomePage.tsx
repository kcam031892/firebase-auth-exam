import React from 'react';

import { useFirebaseAuth } from 'shared/hooks/useFirebaseAuth';

const HomePage: React.FC = () => {
  const { user } = useFirebaseAuth();
  return (
    <div>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default HomePage;
