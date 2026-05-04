import { useState } from "react";

export default function BotaoTime({ nome }) {
  const [gols, setGols] = useState(0);

  return (
    <div>
      <h3>{nome}: {gols}</h3>

      <button onClick={() => setGols(gols + 1)}>
        Gol do {nome}
      </button>
    </div>
  );
}