//Ana Carolina - 10771387         |Mariana Fidelis - 10721308


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("usuarioLogado");
    router.replace("/");
  }

  useEffect(() => {
    const dados = localStorage.getItem("usuarioLogado");

    if (dados) {
      try {
        const usuarioSalvo = JSON.parse(dados);
        setUsuario(usuarioSalvo);
      } catch (erro) {
        console.error("Erro ao carregar usuário:", erro);
        router.replace("/login");
      }
    } else {
      router.replace("/login");
    }
  }, [router]);

  if (!usuario) {
    return null;
  }

  const habilidades = Array.isArray(usuario.habilidades)
    ? usuario.habilidades
    : [];

  const localizacao = [
    usuario.pais,
    usuario.cidade,
    usuario.estado,
  ].filter(Boolean).join(", ");

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
            <span className="dot" style={{ background: "#fff" }}></span>
            DevNest
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
            <Link
              href="/projetos"
              data-nav="phome"
              style={{ color: "#e4e7ff" }}
            >
              Projetos
            </Link>

            <Link
              href="/mpropostas"
              data-nav="pprojetos"
              style={{ color: "#e4e7ff" }}
            >
              Minhas Propostas
            </Link>

            <button
              type="button"
              onClick={handleLogout}
            >
              Sair
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="perfilhero">
          <div className="container">
            <p className="hi">
              Olá, meu nome é {usuario.nome}
            </p>

            <p>
              {usuario.profissao || usuario.area || "Profissional DevNest"}
            </p>

            <div className="pphoto">
              {usuario.foto ? (
                <img
                  src={usuario.foto}
                  alt={`Foto de ${usuario.nome}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : (
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
              )}
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

              {localizacao || "Localização não informada"}
            </p>
          </div>
        </section>

        <section className="prcont">
          <div className="profile-col">
            <h3>Projetos e experiências</h3>

            <div className="project-mini">
              <strong>
                {usuario.projetos_experiencias || "Nenhum projeto cadastrado"}
              </strong>
            </div>
          </div>

          <div className="profile-col">
            <h3>Habilidades</h3>

            <div className="skill-tags">
              {habilidades.length > 0 ? (
                habilidades.map((habilidade, index) => (
                  <span key={index}>{habilidade}</span>
                ))
              ) : (
                <span>Nenhuma habilidade cadastrada</span>
              )}
            </div>
          </div>
        </section>

        <nav className="plinks">
          {usuario.portfolio && (
            <a
              href={usuario.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver portfólio"
            >
              Portfólio
            </a>
          )}

          {usuario.linkedin && (
            <a
              href={usuario.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver LinkedIn"
            >
              LinkedIn
            </a>
          )}

          {usuario.github && (
            <a
              href={usuario.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver GitHub"
            >
              GitHub
            </a>
          )}
        </nav>
      </main>
    </>
  );
}
