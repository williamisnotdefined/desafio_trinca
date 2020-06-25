import React from 'react';

import { AuthProvider } from './Auth';

const GlobalProviders: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default GlobalProviders;
