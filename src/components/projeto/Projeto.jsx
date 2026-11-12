//Ana Carolina - 10771387         |Mariana Fidelis - 10721308


export default function Projeto() {
  return (
    <>
      <main className="mainprojeto">
        <a className="back" href="/projetos" aria-label="Voltar para projetos">
          ←
        </a>
        <div
          id="imgprojeto"
          className="projetoimage"
          style={{
            "--photo": "url('/img/web.jpg')",
            backgroundImage: "url('/img/web.jpg')",
          }}
        ></div>
        <h1 id="titleprojeto" className="titlebox">
          LANDING PAGE PARA STARTUP
        </h1>
        <div className="detail-meta">
          <div>
            <small>ORÇAMENTO</small>
            <strong id="detailBudget">R$ 1.800</strong>
          </div>
          <div>
            <small>PRAZO</small>
            <strong id="detailDeadline">15 DIAS</strong>
          </div>
          <div>
            <small>ÁREA</small>
            <strong id="detailArea">FRONT-END</strong>
          </div>
        </div>
        <div className="boxprojeto">
          <h2 className="section-title">SOBRE O PROJETO</h2>
          <p id="detailDescription" className="body-text">
            Desenvolvimento de uma landing page responsiva para uma startup de
            tecnologia.
          </p>
          <h2 className="section-title">REQUISITOS</h2>
          <ul className="body-list">
            <li>HTML e CSS</li>
            <li>JavaScript</li>
            <li>Layout responsivo</li>
            <li>Git</li>
          </ul>
          <h2 className="section-title">TECNOLOGIAS</h2>
          <p className="body-text">HTML · CSS · JavaScript</p>
          <div className="center action-space">
            <a href="/proposta" className="main-btn link-btn">
              ENVIAR PROPOSTA
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
