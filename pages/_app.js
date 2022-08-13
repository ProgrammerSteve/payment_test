import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation'

import { useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {

  const [name,setName]=useState('Joe')
  return( 
      <>
      <UserProvider>
        <Navigation/>
        <Component {...pageProps} /> 
      </UserProvider>
      </>
  )
}

export default MyApp
