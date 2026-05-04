import { useEffect } from "react";

export default function Ex11() {
  useEffect(() => {
    alert("Executou uma vez!");
  }, []);

  return (
    <div className="card">
      <h2>Exercício 11</h2>
    </div>
  );
}