import { useState } from "react";
export default function Me({ damageScore, setDamageScore }) {
  const attack = () => {
    setDamageScore(Math.floor(Math.random() * 10));
  };
  return (
    <div>
      <h2>Me</h2>
      <h4>Hitpoints: {hitpoints}</h4>
      <button onClick={attack}>Attack!</button>
    </div>
  );
}
