//Ana Carolina - 10771387         |Mariana Fidelis - 10721308


export default function Sobre() {
  return (
    <>
      <main className="mainsobre">
        <section className="sobre">
          <div className="sobre-content">
            <h2>Sobre o Devenest</h2>
            <p>Conectando talentos de tecnologia às melhores oportunidades.</p>
            <p>
              O DevNest aproxima freelancers e empresas para tornar a busca por
              oportunidades e profissionais mais simples, clara e segura.
            </p>
            <a href="/projetos" className="btn">
              Saiba mais
            </a>
          </div>
          <div className="s-cards">
            <div className="s-card">
              <h4 className="s-card__title">Missão</h4>
              <p className="s-card__body">
                Ajudar pessoas a desenvolverem suas habilidades em tecnologia e
                a encontrarem oportunidades de carreira.
              </p>
            </div>
            <div className="s-card">
              <h4 className="s-card__title">Visão</h4>
              <p className="s-card__body">
                Ser uma plataforma de referência para conectar profissionais de
                tecnologia a projetos, empresas e novas oportunidades de
                carreira.
              </p>
            </div>
          </div>
        </section>
      </main>
      <section className="s-features">
        <div className="s-features__content">
          <p className="s-eyebrow">O que nos diferencia</p>
          <p className="s-body">
            Criamos uma experiência simples para que profissionais encontrem
            projetos compatíveis com suas habilidades e empresas encontrem os
            talentos certos para cada desafio.
          </p>
          <p className="s-body">
            O DevNest valoriza portfólios, habilidades, experiências e
            comunicação direta, deixando cada etapa da conexão mais objetiva.
          </p>
          <ul className="s-checklist">
            <li>
              <span className="s-check">✓</span>
              Perfis organizados por habilidades e experiência
            </li>
            <li>
              <span className="s-check">✓</span>
              Busca e filtros para encontrar o profissional certo
            </li>
            <li>
              <span className="s-check">✓</span>
              Projetos com informações claras de prazo e orçamento
            </li>
            <li>
              <span className="s-check">✓</span>
              Portfólio e experiências em destaque
            </li>
            <li>
              <span className="s-check">✓</span>
              Conexão direta entre freelancer e empresa
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
