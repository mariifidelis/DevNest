
//Ana Carolina - 10771387         |Mariana Fidelis - 10721308

"use client";

import { useState, useEffect } from "react";

export default function Projetos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projetos")
      .then((resposta) => resposta.json())
      .then((dados) => setProjetos(dados))
      .catch((erro) => console.error("Erro ao buscar projetos:", erro));
  }, []);

  const filtros = [
    { id: "all", nome: "Todos" },
    { id: "web", nome: "Web" },
    { id: "dados", nome: "Dados" },
    { id: "cyber", nome: "Cyber" },
    { id: "uiux", nome: "UI/UX" },
    { id: "mobile", nome: "Mobile" },
    { id: "devops", nome: "DevOps" },
    { id: "ia", nome: "IA" },
    { id: "automacao", nome: "Automação" },
  ];

  const projetosFiltrados =
    categoriaSelecionada === "all"
      ? projetos
      : projetos.filter(
          (projeto) => projeto.categoria === categoriaSelecionada
        );

  return (
    <main className="mainprojetos">
      <h1>PROJETOS DISPONÍVEIS</h1>

      <section className="categoria-row">
        <span>Categoria</span>

        <div className="categoria-buttons">
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              className={`filter-btn ${
                categoriaSelecionada === filtro.id ? "active" : ""
              }`}
              onClick={() => setCategoriaSelecionada(filtro.id)}
            >
              {filtro.nome}
            </button>
          ))}
        </div>
      </section>

      <section className="cards-grid">
        {projetosFiltrados.map((projeto) => (
          <article
            className="project-card"
            data-category={projeto.categoria}
            key={projeto.identificador}
          >
            <header className="card-header">
              <span>{projeto.data}</span>
              <b>{projeto.nomeCategoria}</b>
            </header>

            <div
              className="card-image"
              style={{
                "--photo": `url('${projeto.imagem}')`,
                backgroundImage: `url('${projeto.imagem}')`,
              }}
            ></div>

            <h2>{projeto.titulo}</h2>

            <p>{projeto.descricao}</p>

            <footer className="card-footer">
              <small>
                {projeto.empresa} · {projeto.valor}
              </small>

              <a
                href="/projeto"
                className="card-arrow"
                data-project={projeto.identificador}
                aria-label="Ver detalhes do projeto"
              >
                →
              </a>
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
}
