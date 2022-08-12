import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation'


import { PayPalScriptProvider, PayPalButtons,usePayPalScriptReducer } from "@paypal/react-paypal-js";
const initialOptions = {
  "client-id": "test",
  currency: "USD",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};




function MyApp({ Component, pageProps }) {
  const [{ isPending }] = usePayPalScriptReducer();
  return( <>
    <Navigation/>
  
  <PayPalScriptProvider deferLoading={true} options={initialOptions}>
            <Component {...pageProps} />
            {isPending?<p>Loading...</p>:<PayPalButtons style={{ layout: "horizontal" }} />}
  </PayPalScriptProvider>
  </>
  )
}

export default MyApp
