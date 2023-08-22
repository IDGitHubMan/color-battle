import { useState } from "react";
export default function Me({ damageScore, setDamageScore }) {
  const [hitpoints, setHitpoints] = useState(20);
  const attack = () => {
    setDamageScore(Math.random() * 10);
    setHitpoints(hitpoints - damageScore);
  };
  return (
    <div>
      <h2>Me</h2>
      <h4>Hitpoints: {hitpoints}</h4>
      <button>Attack!</button>
    </div>
  );
}
