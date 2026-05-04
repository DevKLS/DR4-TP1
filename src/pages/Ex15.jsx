import PerguntaResposta from "../componentes/PerguntaResposta";

export default function Ex15() {
  return (
    <div className="card">
      <h2>Exercício 15</h2>

      <PerguntaResposta
        pergunta="Função do useMemo?"
        resposta="Evitar cálculos desnecessários memorizando valores."
      />
    </div>
  );
}