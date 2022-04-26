import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {props.zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  );
}
