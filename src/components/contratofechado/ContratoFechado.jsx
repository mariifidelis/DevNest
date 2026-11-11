export default function ContratoFechado() {
  return (
    <>
      <section className="contfechado">
        <div className="cfcheck">✓</div>
        <h2>CONTRATO FECHADO</h2>
        <p>O contrato foi confirmado com sucesso.</p>
        <p>Parabéns, por fechar seu contrato!</p>
        <p>O projeto já está disponível na sua lista de projetos ativos.</p>
        <br />
        <div className="contfechado_detalhes">
          <div>
            <span>Projeto</span>
            <strong>Landing Page</strong>
          </div>
          <div>
            <span>Valor</span>
            <strong>R$ 1.800</strong>
          </div>
          <div>
            <span>Prazo</span>
            <strong>15 dias</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>ATIVO</strong>
          </div>
        </div>
        <a className="main-btn" href="/projetos">
          PROJETOS
        </a>
      </section>
    </>
  );
}
