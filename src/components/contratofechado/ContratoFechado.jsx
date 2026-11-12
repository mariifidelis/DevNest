//Ana Carolina - 10771387         |Mariana Fidelis - 10721308


"use client";

import { useEffect, useState } from "react";

export default function ContratoFechado() {
  const [proposta, setProposta] = useState({
    projeto: "Landing Page",
    cliente: "TechCorp",
    valor: "R$ 1.800",
    prazo: "15 dias",
  });

  useEffect(() => {
    const dados = localStorage.getItem("propostasDevNest");

    if (dados) {
      try {
        const propostas = JSON.parse(dados);

        if (propostas.length > 0) {
          const ultimaProposta = propostas[propostas.length - 1];

          setProposta({
            projeto: ultimaProposta.projeto,
            cliente: ultimaProposta.cliente,
            valor: ultimaProposta.valor,
            prazo: ultimaProposta.prazo,
          });
        }
      } catch {
        console.log("Não foi possível recuperar a proposta.");
      }
    }
  }, []);

  return (
    <section className="contfechado">
      <div className="cfcheck">✓</div>

      <h2>CONTRATO FECHADO</h2>

      <p>O contrato foi confirmado com sucesso.</p>
      <p>Parabéns, {usuario.nome} por fechar seu contrato!</p>
      <p>O projeto já está disponível na sua lista de projetos ativos.</p>

      <br />

      <div className="contfechado_detalhes">
        <div>
          <span>Projeto</span>
          <strong>{proposta.projeto}</strong>
        </div>

        <div>
          <span>Cliente</span>
          <strong>{proposta.cliente}</strong>
        </div>

        <div>
          <span>Valor</span>
          <strong>{proposta.valor}</strong>
        </div>

        <div>
          <span>Prazo</span>
          <strong>{proposta.prazo}</strong>
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
  );
}
