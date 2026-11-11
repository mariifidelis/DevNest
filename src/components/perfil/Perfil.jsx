import Link from "next/link";

export default function Perfil() {
  return (
    <>
      <header
        className="pheader"
        style={{
          background: "rgba(46,68,206,.95)",
          borderBottomColor: "rgba(255,255,255,.15)",
        }}
      >
        <div className="container">
          <Link href="/" className="logo" style={{ color: "#fff" }}>
            <span className="dot" style={{ background: "#fff" }}></span>DevNest
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Abrir menu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className="main-nav">
            <a href="/projetos" data-nav="phome" style={{ color: "#e4e7ff" }}>
              Projetos
            </a>
            <a
              href="/mpropostas"
              data-nav="pprojetos"
              style={{ color: "#e4e7ff" }}
            >
              Minhas Propostas
            </a>
          </nav>
        </div>
      </header>
      <main>
        <section className="perfilhero">
          <div className="container">
            <p className="hi">Olá, meu nome é Augusto</p>
            <p>
              Eu sou um designer gráfico com habilidades em logo, identidade
              visual e interação de design.
            </p>
            <div className="pphoto">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "#fff" }}
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3.6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                ></circle>
                <path
                  d="M4 20c1.8-3.6 4.8-5.4 8-5.4s6.2 1.8 8 5.4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
            <p className="plocation">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
                <circle
                  cx="12"
                  cy="10"
                  r="2.4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></circle>
              </svg>
              Austrália, Sydney
            </p>
          </div>
        </section>
        <section className="prcont">
          <div className="profile-col">
            <h3>Projetos</h3>
            <div className="project-mini">
              <strong>Identidade visual — Loja Aurora</strong>
              <span>Logo, paleta de cores e guia de marca · Web</span>
            </div>
            <div className="project-mini">
              <strong>App de reservas — Studio Fit</strong>
              <span>UI completa para app mobile · UI/UX</span>
            </div>
            <div className="project-mini">
              <strong>Landing page — Nimbus Cloud</strong>
              <span>Design responsivo e protótipo interativo · Web</span>
            </div>
          </div>
          <div className="profile-col">
            <h3>Habilidades</h3>
            <div className="skill-tags">
              <span>Design de logo</span>
              <span>Identidade visual</span>
              <span>UI/UX</span>
              <span>Figma</span>
              <span>Prototipagem</span>
              <span>Design de interação</span>
              <span>Ilustração</span>
            </div>
          </div>
        </section>
        <nav className="plinks">
          <a href="#" aria-label="Ver portfólio">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              ></rect>
              <path
                d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
            </svg>
            Portfólio
          </a>
          <a href="#" aria-label="Ver LinkedIn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
              ></rect>
              <path
                d="M7.5 10v6.5M7.5 7.4v.1M12 16.5V13c0-1.4 1-2.5 2.3-2.5S16.5 11.6 16.5 13v3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
            LinkedIn
          </a>
          <a href="#" aria-label="Ver GitHub">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.71 1.03 1.6 1.03 2.7 0 3.85-2.35 4.7-4.58 4.94.36.31.68.93.68 1.87v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
                fill="currentColor"
              ></path>
            </svg>
            GitHub
          </a>
        </nav>
      </main>
    </>
  );
}
