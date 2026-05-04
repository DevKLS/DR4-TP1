import PerguntaResposta from "../componentes/PerguntaResposta";

export default function Ex5() {
  return (
    <div className="card">
      <h2>Exercício 5</h2>

      <PerguntaResposta
        pergunta="Exemplo de pergunta?"
        resposta="Essa é a resposta."
      />
    </div>
  );
}