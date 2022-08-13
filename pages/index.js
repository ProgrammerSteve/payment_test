import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

import { useUser } from '@auth0/nextjs-auth0';


import { 
  PayPalScriptProvider, 
  PayPalButtons,
 } from "@paypal/react-paypal-js";



export default function Home() {
  const [name, setName]=useState('')
  
  const { user, error, isLoading } = useUser();

  useEffect(()=>{
    user &&
      console.log(user)
  },[user])



  return (
    <>
  <div className='my-5 py-2'>
    <div className='mb-2'><p className='text-xl'>Auth0 Sign In/ Logout</p></div>
    <div className='flex gap-3'>
      <div><a href="/api/auth/login" className='w-24 h-12 px-2 py-1 bg-white text-black border-2 border-black rounded-lg' >Log In</a></div>
      <div><a href="/api/auth/logout" className='w-24 h-12 px-2 py-1 bg-black text-gray-300 border-2 border-gray-300 rounded-lg' >Log Out</a></div>
    </div>
    </div>

      {
        isLoading &&
        <div>Loading ...</div>
      }

      {
      user  && 
        <div>
          <h2>Name: {user.name}</h2>
          <p>Email: {user.email}</p>
  
        </div>
      }


    <div className="w-screen h-screen mx-auto">
        <PayPalScriptProvider options={{"client-id": "AZfRFFI9_Y5HHJwspaBZ50NXlvAAmGebJtlzogNPWJdwgAbpW-sZrJ5vHLQlm9hP010IHXsxHmZV6gn6"}}>
        <PayPalButtons
        style={
          { 
            layout: "vertical", 
            height: 50,
          }
        } 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />  
        </PayPalScriptProvider>
    </div>
    </>



  )
}




