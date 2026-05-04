import PerguntaResposta from "../componentes/PerguntaResposta";

export default function Ex14() {
  return (
    <div className="card">
      <h2>Exercício 14</h2>

      <PerguntaResposta
        pergunta="Função do useEffect?"
        resposta="Executar efeitos após renderização."
      />
    </div>
  );
}