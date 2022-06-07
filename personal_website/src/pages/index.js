import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="robots" content="max-image-preview:large, NOODP, NOYDIR"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Become a savvy traveler with guides to the world's best destinations, tricks for booking hotel rooms, and tips for finding the best things to do wherever you go." itemprop="description"/>
        <meta name="emailvertical" content="TRIPSAVVY"/>
        <meta itemprop="name" content="TripSavvy"/>
        <meta property="article:section" content="TripSavvy"/>
        <meta property="fb:app_id" content="121030274606741"/>
        <meta property="og:type" content="article"/>
        <meta property="og:site_name" content="TripSavvy"/>
        <meta property="og:url" content="https://www.tripsavvy.com/"/>
        <meta property="og:title" content="TripSavvy"/>
        <meta property="og:description" content="Become a savvy traveler with guides to the world's best destinations, tricks for booking hotel rooms, and tips for finding the best things to do wherever you go."/>
        <meta property="og:image" content="https://www.tripsavvy.com/thmb/Oa30k_UewbqghMNuL9pAJ5Is9ZA=/1001x1001/filters:fill(auto,1)/TripSavvy_1000x1000_1-5919dbe23df78cf5fa559857.png"/>
        <meta property="article:author" content="https://www.facebook.com/tripsavvytips/"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@tripsavvytips"/>
        <meta name="twitter:title" content="TripSavvy"/>
        <meta name="twitter:description" content="Become a savvy traveler with guides to the world's best destinations, tricks for booking hotel rooms, and tips for finding the best things to do wherever you go."/>
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};
