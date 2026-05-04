import PerguntaResposta from "../componentes/PerguntaResposta";

export default function Ex12() {
  return (
    <div className="card">
      <h2>Exercício 12</h2>

      <PerguntaResposta
        pergunta="O que são hooks?"
        resposta="Funções do React que permitem usar estado e ciclo de vida."
      />
    </div>
  );
}