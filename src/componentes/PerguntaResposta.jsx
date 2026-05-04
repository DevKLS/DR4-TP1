import { useState } from "react";

export default function PerguntaResposta({ pergunta, resposta }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div style={{
      background: "#020617",
      borderRadius: "15px",
      padding: "25px",
      boxShadow: "0 0 20px rgba(0,0,0,0.5)",
      maxWidth: "500px",
      margin: "20px auto",
      textAlign: "center"
    }}>
      <h2 style={{ marginBottom: "15px" }}>{pergunta}</h2>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar resposta" : "Mostrar resposta"}
      </button>

      <div
        style={{
          marginTop: "20px",
          maxHeight: mostrar ? "200px" : "0px",
          overflow: "hidden",
          transition: "all 0.4s ease",
          opacity: mostrar ? 1 : 0
        }}
      >
        <p style={{ lineHeight: "1.6" }}>{resposta}</p>
      </div>
    </div>
  );
}