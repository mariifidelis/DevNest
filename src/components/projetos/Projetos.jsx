
"use client";

import { useState } from "react";

export default function Projetos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");

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

  const projetos = [
    {
      categoria: "web",
      data: "Agosto, 2026",
      nomeCategoria: "Web",
      imagem: "/img/web.jpg",
      titulo: "Landing Page para Startup",
      descricao: "Criação de página responsiva para uma startup da área de tecnologia.",
      empresa: "TechCorp",
      valor: "R$ 1.800",
      identificador: "landing",
    },
    {
      categoria: "dados",
      data: "Agosto, 2026",
      nomeCategoria: "Dados",
      imagem: "/img/dados.jpg",
      titulo: "Dashboard de Indicadores",
      descricao: "Painel para acompanhamento de métricas e indicadores do negócio.",
      empresa: "DataBridge",
      valor: "R$ 2.500",
      identificador: "dashboard",
    },
    {
      categoria: "uiux",
      data: "Agosto, 2026",
      nomeCategoria: "UI/UX",
      imagem: "/img/uiux.jpg",
      titulo: "Interface para Aplicativo",
      descricao: "Protótipo de telas e fluxo de navegação para aplicativo mobile.",
      empresa: "AppLab",
      valor: "R$ 1.600",
      identificador: "app",
    },
    {
      categoria: "devops",
      data: "Agosto, 2026",
      nomeCategoria: "DevOps",
      imagem: "/img/devops.jpg",
      titulo: "Implementação de CI/CD",
      descricao: "Configuração de pipeline de integração e entrega contínua para projeto de software.",
      empresa: "DevFlow",
      valor: "R$ 2.800",
      identificador: "cicd",
    },
    {
      categoria: "dados",
      data: "Agosto, 2026",
      nomeCategoria: "Dados",
      imagem: "/img/dados.jpg",
      titulo: "Dashboard de Indicadores",
      descricao: "Painel para acompanhamento de métricas e indicadores do negócio.",
      empresa: "DataBridge",
      valor: "R$ 2.500",
      identificador: "loja",
    },
    {
      categoria: "automacao",
      data: "Agosto, 2026",
      nomeCategoria: "Automação",
      imagem: "/img/automacao.jpg",
      titulo: "Automação em Python",
      descricao: "Automação de tarefas repetitivas e geração de relatórios internos.",
      empresa: "FlowLab",
      valor: "R$ 3.000",
      identificador: "python",
    },
    {
      categoria: "cyber",
      data: "Agosto, 2026",
      nomeCategoria: "Cyber",
      imagem: "/img/cyber.jpg",
      titulo: "Revisão de Segurança",
      descricao: "Checklist de segurança, permissões e boas práticas em aplicação web.",
      empresa: "SafeBit",
      valor: "R$ 2.800",
      identificador: "cyber",
    },
    {
      categoria: "web",
      data: "Agosto, 2026",
      nomeCategoria: "Web",
      imagem: "/img/web.jpg",
      titulo: "Site Institucional",
      descricao: "Desenvolvimento de cinco páginas responsivas para pequena empresa.",
      empresa: "Clínica Vitta",
      valor: "R$ 2.400",
      identificador: "institucional",
    },
    {
      categoria: "uiux",
      data: "Agosto, 2026",
      nomeCategoria: "UI/UX",
      imagem: "/img/uiux.jpg",
      titulo: "Identidade Visual",
      descricao: "Definição visual e aplicação da marca em peças digitais principais.",
      empresa: "Studio Nova",
      valor: "R$ 1.500",
      identificador: "identidade",
    },
    {
      categoria: "web",
      data: "Agosto, 2026",
      nomeCategoria: "Web",
      imagem: "/img/web.jpg",
      titulo: "Painel de Pedidos",
      descricao: "Interface simples para cadastro e atualização do status de pedidos.",
      empresa: "FoodBox",
      valor: "R$ 2.200",
      identificador: "pedidos",
    },
    {
      categoria: "mobile",
      data: "Setembro, 2026",
      nomeCategoria: "Mobile",
      imagem: "/img/mobile.jpg",
      titulo: "Aplicativo de Serviços",
      descricao: "Criação de fluxo mobile para contratação de serviços e acompanhamento de pedidos.",
      empresa: "MoveTech",
      valor: "R$ 3.200",
      identificador: "mobile-1",
    },
    {
      categoria: "ia",
      data: "Setembro, 2026",
      nomeCategoria: "IA",
      imagem: "/img/ia.jpg",
      titulo: "Assistente Inteligente",
      descricao: "Protótipo de assistente para organizar informações e responder dúvidas frequentes.",
      empresa: "NovaAI",
      valor: "R$ 4.000",
      identificador: "ia-1",
    },
    {
      categoria: "automacao",
      data: "Setembro, 2026",
      nomeCategoria: "Automação",
      imagem: "/img/automacao.jpg",
      titulo: "Automação de Relatórios",
      descricao: "Integração de dados e geração automática de relatórios para equipes administrativas.",
      empresa: "SmartFlow",
      valor: "R$ 2.700",
      identificador: "automacao",
    },
    {
      categoria: "mobile",
      data: "Setembro, 2026",
      nomeCategoria: "Mobile",
      imagem: "/img/mobile.jpg",
      titulo: "Aplicativo de Serviços",
      descricao: "Criação de fluxo mobile para contratação de serviços e acompanhamento de pedidos.",
      empresa: "MoveTech",
      valor: "R$ 3.200",
      identificador: "mobile-2",
    },
    {
      categoria: "ia",
      data: "Setembro, 2026",
      nomeCategoria: "IA",
      imagem: "/img/ia.jpg",
      titulo: "Assistente de Atendimento",
      descricao: "Protótipo de assistente para organizar informações e responder dúvidas frequentes.",
      empresa: "NovaAI",
      valor: "R$ 4.000",
      identificador: "ia-2",
    },
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
