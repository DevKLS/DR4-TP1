import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Desenvolvimento Web com React - DR4_TP1</h1>

      <div className="grid">
        {Array.from({ length: 16 }, (_, i) => (
          <Link key={i} to={`/ex${i + 1}`} className="card-btn">
            Exercício {i + 1}
          </Link>
        ))}
      </div>

      <div className="footer">
        <p>Selecione um exercício 👆</p>
      </div>
    </div>
  );
}