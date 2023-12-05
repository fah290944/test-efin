import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import '@/styles/Home.module.css'
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [information, setInformation] = useState({});

  const getInfoemation = async () => {
    const apiUrl = ` https://demotrade.efintradeplus.com/ExamAPI/examdata`;

    const requestOptions = {
      method: "GET",
    };

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())

      .then((res) => {
        setInformation(res);
      });
  };



  useEffect(() => {
    getInfoemation();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className='navbar-home'>
        <img src="/img/logo.png" className='logo'/>
        <div>
          Menu 1
        </div>
        <div>
          Menu 2
        </div>
        <div>
          Menu 3
        </div>
      </div>
      <div className='body-home'>
        <div className='data-home'>
          <div className='data data-1'>
            {information.data_1}
          </div>
          <div className='data data-2'>
            {information.data_2}
          </div >
          <div className='data data-3'>
            {information.data_3}
          </div>
          <div className='data data-4'>
            {information.data_4}
          </div>
          <div className='data data-5'>
            {information.data_5}
          </div>
          <div className='data data-6'>
            {information.data_6}
          </div>
        </div>
      </div>
    </>
  )
}
