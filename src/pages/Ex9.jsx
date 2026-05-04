import PerguntaResposta from "../componentes/PerguntaResposta";

export default function Ex9() {
  return (
    <div className="card">
      <h2>Exercício 9</h2>

      <PerguntaResposta
        pergunta="Desvantagens de funções inline?"
        resposta="Recriam funções a cada render e podem afetar performance."
      />
    </div>
  );
}