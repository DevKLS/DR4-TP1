import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="exercise-container">
      <div className="card">

        <Link to="/" className="back-btn">
          ⬅ Voltar
        </Link>

        {children}

      </div>
    </div>
  );
}