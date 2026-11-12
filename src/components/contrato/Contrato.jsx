//Ana Carolina - 10771387         |Mariana Fidelis - 10721308


"use client";

import { useRouter } from "next/navigation";

export default function Contrato() {
  const router = useRouter();

  function fecharContrato(event) {
    event.preventDefault();
    router.push("/contratofechado");
  }

  return (
    <main className="contratopg">
      <a
        className="back"
        href="/mpropostas"
        aria-label="Voltar para minhas propostas"
      >
        ←
      </a>

      <h1 className="conttitle">CONTRATO</h1>

      <div className="detalhecont">
        <div>
          <small>PROJETO</small>
          <strong>Landing Page</strong>
        </div>

        <div>
          <small>VALOR</small>
          <strong>R$ 1.800</strong>
        </div>

        <div>
          <small>PRAZO</small>
          <strong>15 dias</strong>
        </div>
      </div>

      <h2 className="title">PARTES ENVOLVIDAS</h2>

      <p className="body-text">
        Freelancer: <span id="contfreelancer">Mariana</span>
      </p>

      <p className="clitext">Cliente: TechCorp</p>

      <h2 className="section-title">TERMOS</h2>

      <ul className="contlist">
        <li>O projeto será realizado conforme o escopo.</li>
        <li>O prazo acordado deverá ser respeitado.</li>
        <li>Alterações deverão ser negociadas entre as partes.</li>
      </ul>

      <form onSubmit={fecharContrato}>
        <label className="contcheck" htmlFor="contcheck">
          <input
            type="checkbox"
            id="contcheck"
            required
          />
          <span>Li e concordo com os termos do contrato.</span>
        </label>

        <div className="center action-space">
          <button type="submit" className="contractButton">
            FECHAR CONTRATO
          </button>
        </div>
      </form>
    </main>
  );
}
