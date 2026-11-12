//Ana Carolina - 10771387         |Mariana Fidelis - 10721308


"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function MinhasPropostas() {
  const [propostasSalvas, setPropostasSalvas] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem("propostasDevNest");

    if (dados) {
      try {
        setPropostasSalvas(JSON.parse(dados));
      } catch {
        setPropostasSalvas([]);
      }
    }
  }, []);

  return (
    <>
      <Header />

      <main className="propostapg">
        <h2 className="mpgtitle">MINHAS PROPOSTAS</h2>

        <section className="propostas">

          <article className="propostaslista">
            <div>
              <h3 id="proposta">Landing Page para Startup</h3>
              <p>TechCorp</p>
            </div>
            <span className="status">ACEITA</span>
            <strong id="valorproposta">R$ 1.800</strong>
            <a
              className="card-arrow"
              href="/contrato"
              aria-label="Ver contrato"
            >
              →
            </a>
          </article>

          <article className="propostaslista">
            <div>
              <h3>Dashboard de Indicadores</h3>
              <p>DataBridge</p>
            </div>
            <span className="status">EM ANÁLISE</span>
            <strong>R$ 2.500</strong>
            <span>...</span>
          </article>

          <article className="propostaslista">
            <div>
              <h3>Interface Mobile</h3>
              <p>AppLab</p>
            </div>
            <span className="status">EM ANÁLISE</span>
            <strong>R$ 1.600</strong>
            <span>...</span>
          </article>

          {propostasSalvas.map((proposta, index) => (
            <article className="propostaslista" key={index}>
              <div>
                <h3>{proposta.projeto}</h3>
                <p>{proposta.cliente}</p>
              </div>

              <span className="status">{proposta.status}</span>

              <strong>{proposta.valor}</strong>

              <span>...</span>
            </article>
          ))}

        </section>
      </main>
    </>
  );
}
