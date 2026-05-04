import { useState, useMemo } from "react";

export default function Ex16() {
  const [numero, setNumero] = useState(0);

  const resultado = useMemo(() => {
    console.log("Calculando...");
    return numero * 2;
  }, [numero]);

  return (
    <div className="card">
      <h2>Exercício 16</h2>

      <p>Resultado: {resultado}</p>

      <button onClick={() => setNumero(numero + 1)}>
        Incrementar
      </button>
    </div>
  );
}