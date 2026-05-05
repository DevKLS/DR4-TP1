import { useState } from "react";

export default function Ex3() {
  const [contador, setContador] = useState(0);

  return (
    <div className="card">
      <h2>Exercício 3</h2>

      <p>Cliques: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Clique
      </button>
    </div>
  );
}