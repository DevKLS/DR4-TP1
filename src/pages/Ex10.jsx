import { useEffect } from "react";

export default function Ex10() {
  useEffect(() => {
    alert("Renderizou!");
  });

  return (
    <div className="card">
      <h2>Exercício 10</h2>
    </div>
  );
}