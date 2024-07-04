import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import MainApp from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-mntuh5zm31fzpbve.us.auth0.com"
    clientId="CvMDsSvZ4Z9EQKLLC4hNinUFBcCx1Hhn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <MainApp />
  </Auth0Provider>,
);
