import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import { zodiac } from '../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  );
}
