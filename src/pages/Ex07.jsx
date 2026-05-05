import PerguntaResposta from "../componentes/PerguntaResposta";

export default function Ex7() {
  return (
    <div className="card">
      <h2>Exercício 7</h2>

      <PerguntaResposta
        pergunta="O que é um SyntheticEvent?"
        resposta="É um objeto do React que padroniza eventos entre navegadores."
      />
    </div>
  );
}