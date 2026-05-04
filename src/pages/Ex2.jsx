export default function Ex2() {
  function handleClick() {
    console.log("Mensagem clicada!");
  }

  return (
    <div className="card">
      <h2>Exercício 2</h2>

      <button onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  );
}