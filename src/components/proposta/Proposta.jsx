export default function Proposta() {
  return (
    <>
      <main className="mainproposta">
        <h1 className="box-title">ENVIAR PROPOSTA</h1>
        <p className="body-text">
          Preencha o formulário abaixo para enviar sua proposta para o projeto
          selecionado.
        </p>
        <form className="propostaformbox" id="propostaForm" noValidate>
          <a
            className="back"
            href="/projeto"
            aria-label="Voltar para o projeto"
          >
            ←
          </a>
          <h1 className="titlebox">ENVIAR PROPOSTA</h1>
          <div className="form-row">
            <label htmlFor="propostaprojeto">PROJETO</label>
            <input
              id="propostaprojeto"
              className="form-input"
              value="Landing Page para Startup"
              readOnly
            />
          </div>
          <div className="form-row">
            <label htmlFor="propostacliente">CLIENTE</label>
            <input
              id="propostacliente"
              className="form-input"
              value="TechCorp"
              readOnly
            />
          </div>
          <div className="form-row">
            <label htmlFor="proposalValue">VALOR</label>
            <input
              id="proposalValue"
              className="form-input"
              required
              placeholder="R$ 1.800"
            />
          </div>
          <div className="form-row">
            <label htmlFor="proposalDeadline">PRAZO</label>
            <input
              id="proposalDeadline"
              className="form-input"
              required
              placeholder="15 dias"
            />
          </div>
          <div className="form-row">
            <label htmlFor="proposalMessage">MENSAGEM</label>
            <textarea
              id="proposalMessage"
              className="form-textarea"
              required
              placeholder="Apresente sua proposta..."
            ></textarea>
          </div>
          <div className="center action-space">
            <a href="/mpropostas" className="main-btn link-btn">
              ENVIAR PROPOSTA
            </a>
          </div>
        </form>
      </main>
    </>
  );
}
