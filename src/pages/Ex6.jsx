import PerguntaResposta from "../componentes/PerguntaResposta";

export default function Ex6() {
  return (
    <div className="card">
      <h2>Exercício 6</h2>

      <PerguntaResposta
        pergunta='Qual é a diferença de passar o handleClick e chamar o handleClick?'
        resposta="Passar envia a função como referência. Chamar executa imediatamente."
      />
    </div>
  );
}