import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Me from "./components/Me";

function App() {
  const [damageScore, setDamageScore] = useState(0);
  const [myHitpoints, setMyHitpoints] = useState(20);

  return (
    <>
      <Header damageScore={damageScore} />
      <Me
        damageScore={damageScore}
        setDamageScore={setDamageScore}
        myHitpoints={myHitpoints}
      />
    </>
  );
}

export default App;
