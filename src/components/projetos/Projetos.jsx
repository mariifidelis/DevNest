export default function Projetos() {
  return (
    <>
      <main className="mainprojetos">
        <h1>PROJETOS DISPONÍVEIS</h1>
        <section className="categoria-row">
          <span>Categoria</span>
          <div className="categoria-buttons">
            <button
              className="filter-btn active"
              data-filter="all"
              type="button"
            >
              Todos
            </button>
            <button className="filter-btn" data-filter="web" type="button">
              Web
            </button>
            <button className="filter-btn" data-filter="dados" type="button">
              Dados
            </button>
            <button className="filter-btn" data-filter="cyber" type="button">
              Cyber
            </button>
            <button className="filter-btn" data-filter="uiux" type="button">
              UI/UX
            </button>
            <button className="filter-btn" data-filter="mobile" type="button">
              Mobile
            </button>
            <button className="filter-btn" data-filter="devops" type="button">
              DevOps
            </button>
            <button className="filter-btn" data-filter="ia" type="button">
              IA
            </button>
            <button
              className="filter-btn"
              data-filter="automacao"
              type="button"
            >
              Automação
            </button>
          </div>
        </section>
        <section className="cards-grid">
          <article className="project-card" data-category="web">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>Web</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/web.jpg')",
                backgroundImage: "url('/img/web.jpg')",
              }}
            ></div>
            <h2>Landing Page para Startup</h2>
            <p>
              Criação de página responsiva para uma startup da área de
              tecnologia.
            </p>
            <footer className="card-footer">
              <small>TechCorp · R$ 1.800</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="landing"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="dados">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>Dados</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/dados.jpg')",
                backgroundImage: "url('/img/dados.jpg')",
              }}
            ></div>
            <h2>Dashboard de Indicadores</h2>
            <p>
              Painel para acompanhamento de métricas e indicadores do negócio.
            </p>
            <footer className="card-footer">
              <small>DataBridge · R$ 2.500</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="dashboard"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="uiux">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>UI/UX</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/uiux.jpg')",
                backgroundImage: "url('/img/uiux.jpg')",
              }}
            ></div>
            <h2>Interface para Aplicativo</h2>
            <p>
              Protótipo de telas e fluxo de navegação para aplicativo mobile.
            </p>
            <footer className="card-footer">
              <small>AppLab · R$ 1.600</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="app"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="devops">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>DevOps</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/devops.jpg')",
                backgroundImage: "url('/img/devops.jpg')",
              }}
            ></div>
            <h2>Implementação de CI/CD</h2>
            <p>
              Configuração de pipeline de integração e entrega contínua para
              projeto de software.
            </p>
            <footer className="card-footer">
              <small>DevFlow · R$ 2.800</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="cicd"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="dados">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>Dados</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/dados.jpg')",
                backgroundImage: "url('/img/dados.jpg')",
              }}
            ></div>
            <h2>Dashboard de Indicadores</h2>
            <p>
              Painel para acompanhamento de métricas e indicadores do negócio.
            </p>
            <footer className="card-footer">
              <small>DataBridge · R$ 2.500</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="loja"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="automacao">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>Automação</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/automacao.jpg')",
                backgroundImage: "url('/img/automacao.jpg')",
              }}
            ></div>
            <h2>Automação em Python</h2>
            <p>
              Automação de tarefas repetitivas e geração de relatórios internos.
            </p>
            <footer className="card-footer">
              <small>FlowLab · R$ 3.000</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="python"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="cyber">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>Cyber</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/cyber.jpg')",
                backgroundImage: "url('/img/cyber.jpg')",
              }}
            ></div>
            <h2>Revisão de Segurança</h2>
            <p>
              Checklist de segurança, permissões e boas práticas em aplicação
              web.
            </p>
            <footer className="card-footer">
              <small>SafeBit · R$ 2.800</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="cyber"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="web">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>Web</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/web.jpg')",
                backgroundImage: "url('/img/web.jpg')",
              }}
            ></div>
            <h2>Site Institucional</h2>
            <p>
              Desenvolvimento de cinco páginas responsivas para pequena empresa.
            </p>
            <footer className="card-footer">
              <small>Clínica Vitta · R$ 2.400</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="institucional"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="uiux">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>UI/UX</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/uiux.jpg')",
                backgroundImage: "url('/img/uiux.jpg')",
              }}
            ></div>
            <h2>Identidade Visual</h2>
            <p>
              Definição visual e aplicação da marca em peças digitais
              principais.
            </p>
            <footer className="card-footer">
              <small>Studio Nova · R$ 1.500</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="identidade"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="web">
            <header className="card-header">
              <span>Agosto, 2026</span>
              <b>Web</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/web.jpg')",
                backgroundImage: "url('/img/web.jpg')",
              }}
            ></div>
            <h2>Painel de Pedidos</h2>
            <p>
              Interface simples para cadastro e atualização do status de
              pedidos.
            </p>
            <footer className="card-footer">
              <small>FoodBox · R$ 2.200</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="pedidos"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="mobile">
            <header className="card-header">
              <span>Setembro, 2026</span>
              <b>Mobile</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/mobile.jpg')",
                backgroundImage: "url('/img/mobile.jpg')",
              }}
            ></div>
            <h2>Aplicativo de Serviços</h2>
            <p>
              Criação de fluxo mobile para contratação de serviços e
              acompanhamento de pedidos.
            </p>
            <footer className="card-footer">
              <small>MoveTech · R$ 3.200</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="mobile"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="ia">
            <header className="card-header">
              <span>Setembro, 2026</span>
              <b>IA</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/ia.jpg')",
                backgroundImage: "url('/img/ia.jpg')",
              }}
            ></div>
            <h2>Assistente Inteligente</h2>
            <p>
              Protótipo de assistente para organizar informações e responder
              dúvidas frequentes.
            </p>
            <footer className="card-footer">
              <small>NovaAI · R$ 4.000</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="ia"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="automacao">
            <header className="card-header">
              <span>Setembro, 2026</span>
              <b>Automação</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/automacao.jpg')",
                backgroundImage: "url('/img/automacao.jpg')",
              }}
            ></div>
            <h2>Automação de Relatórios</h2>
            <p>
              Integração de dados e geração automática de relatórios para
              equipes administrativas.
            </p>
            <footer className="card-footer">
              <small>SmartFlow · R$ 2.700</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="automacao"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="mobile">
            <header className="card-header">
              <span>Setembro, 2026</span>
              <b>Mobile</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/mobile.jpg')",
                backgroundImage: "url('/img/mobile.jpg')",
              }}
            ></div>
            <h2>Aplicativo de Serviços</h2>
            <p>
              Criação de fluxo mobile para contratação de serviços e
              acompanhamento de pedidos.
            </p>
            <footer className="card-footer">
              <small>MoveTech · R$ 3.200</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="mobile"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
          <article className="project-card" data-category="ia">
            <header className="card-header">
              <span>Setembro, 2026</span>
              <b>IA</b>
            </header>
            <div
              className="card-image"
              style={{
                "--photo": "url('/img/ia.jpg')",
                backgroundImage: "url('/img/ia.jpg')",
              }}
            ></div>
            <h2>Assistente de Atendimento</h2>
            <p>
              Protótipo de assistente para organizar informações e responder
              dúvidas frequentes.
            </p>
            <footer className="card-footer">
              <small>NovaAI · R$ 4.000</small>
              <a
                href="/projeto"
                className="card-arrow"
                data-project="ia"
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
        </section>
      </main>
    </>
  );
}
