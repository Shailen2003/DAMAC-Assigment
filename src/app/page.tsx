import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>HARBOUR LIGHTS DE GRESOGONO</title>
        <meta name="description" content="1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
