//Ana Carolina - 10771387         |Mariana Fidelis - 10721308

"use client";

import { useEffect, useState } from "react";

export default function Cadastro() {
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const [habilidades, setHabilidades] = useState([]);
  const [habilidadeDigitada, setHabilidadeDigitada] = useState("");
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const [foto, setFoto] = useState("");
  useEffect(
    function () {
      if (feedback.type === "success") {
        document
          .getElementById("form-feedback")
          .scrollIntoView({ behavior: "smooth", block: "center" });
        const tempo = setTimeout(function () {
          window.location.href = "/perfil";
        }, 1200);

        return function () {
          clearTimeout(tempo);
        };
      }
    },
    [feedback.type],
  );

  function escolherFoto() {
    document.getElementById("photoinput").click();
  }

  function escolherFotoPeloTeclado(evento) {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      escolherFoto();
    }
  }

  function mostrarFoto(evento) {
    const arquivo = evento.target.files[0];
    if (!arquivo) {
      return;
    }

    // FileReader lê a imagem escolhida, sem enviar o arquivo para um servidor.
    const leitor = new FileReader();
    leitor.onload = function () {
      setFoto(leitor.result);
    };
    leitor.readAsDataURL(arquivo);
  }

  function digitarHabilidade(evento) {
    setHabilidadeDigitada(evento.target.value);
  }

  function verificarTeclaHabilidade(evento) {
    if (evento.key === "Enter" || evento.key === ",") {
      evento.preventDefault();
      adicionarHabilidade();
    } else if (evento.key === "Backspace" && habilidadeDigitada === "") {
      setHabilidades(habilidades.slice(0, -1));
    }
  }

  function atualizarCampo(evento) {
    const campo = evento.target;
    if (campo.name === "senha") {
      setSenha(campo.value);
    }
    if (campo.name === "confirma_senha") {
      setConfirmaSenha(campo.value);
    }
    campo.classList.remove("invalid");
  }

  function adicionarHabilidade() {
    const nome = habilidadeDigitada.trim().replace(/,$/, "").trim();
    if (nome !== "" && !habilidades.includes(nome)) {
      setHabilidades(habilidades.concat(nome));
    }
    setHabilidadeDigitada("");
  }

  function removerHabilidade(nome) {
    const novaLista = [];
    for (let i = 0; i < habilidades.length; i++) {
      if (habilidades[i] !== nome) {
        novaLista.push(habilidades[i]);
      }
    }
    setHabilidades(novaLista);
  }

  async function enviarCadastro(e) {
  e.preventDefault();

  const obrigatorios = e.currentTarget.querySelectorAll("[required]");
  let primeiroErro = null;

  for (let i = 0; i < obrigatorios.length; i++) {
    const campo = obrigatorios[i];
    let valido = campo.value.trim() !== "";

    if (campo.type === "checkbox") {
      valido = campo.checked;
    }

    if (campo.type === "email" && valido) {
      valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim());
    }

    if (campo.id === "senha" && valido) {
      valido = campo.value.length >= 8;
    }

    if (campo.id === "confirma-senha") {
      valido = valido && senha === confirmaSenha;
    }

    campo.classList.toggle("invalid", !valido);

    if (!valido && !primeiroErro) {
      primeiroErro = campo;
    }
  }

  if (primeiroErro) {
    setFeedback({
      message: "Revise os campos destacados antes de continuar.",
      type: "error",
    });

    primeiroErro.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    primeiroErro.focus({ preventScroll: true });
    return;
  }

  try {
    const formulario = new FormData(e.currentTarget);
    const usuario = Object.fromEntries(formulario.entries());

    delete usuario.confirma_senha;
    delete usuario.termos;

    usuario.habilidades = habilidades;
    usuario.foto = foto;

    const resposta = await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    if (!resposta.ok) {
      throw new Error("Erro ao cadastrar usuário.");
    }

    setFeedback({
      message: "Cadastro realizado com sucesso! Redirecionando para o seu perfil...",
      type: "success",
    });

  } catch (erro) {
    console.error("Erro no cadastro:", erro);

    setFeedback({
      message: "Não foi possível realizar o cadastro. Verifique se a API está funcionando.",
      type: "error",
    });
  }
}
  return (
    <div className="topbar">
      <main className="name">
        <div className="login-blob b1" aria-hidden="true"></div>
        <div className="login-blob b2" aria-hidden="true"></div>
        <div className="login-blob b3" aria-hidden="true"></div>

        <h1 className="nametag">DevNest</h1>

        <div className="cadastrocard">
          <h2>Cadastro</h2>

          <div
            id="form-feedback"
            role="status"
            style={{
              display: feedback.message ? "block" : "none",
              marginBottom: "20px",
              padding: "12px 16px",
              borderRadius: "12px",
              background: feedback.type === "error" ? "#fdeaee" : "#eaf7ee",
              color: feedback.type === "error" ? "#b23049" : "#1c7a3d",
              fontSize: "0.85rem",
              textAlign: "center",
            }}
          >
            {feedback.message}
          </div>
          <form id="regiform" onSubmit={enviarCadastro} noValidate>
            <div className="field">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Como você quer ser chamado"
                required
                onChange={atualizarCampo}
              />
            </div>

            <div className="field">
              <label htmlFor="profissao">Profissão</label>
              <input
                type="text"
                id="profissao"
                name="profissao"
                placeholder="Ex: Desenvolvedor(a) Front-end"
                required
                onChange={atualizarCampo}
              />
            </div>

            <div className="field">
              <label htmlFor="area">Área de atuação</label>
              <input
                type="text"
                id="area"
                name="area"
                placeholder="Ex: Web, Dados, Cyber, UI/UX"
                onChange={atualizarCampo}
              />
            </div>

            <div className="field">
              <label htmlFor="pjcpf">PJ / CPF</label>
              <input
                type="text"
                id="pjcpf"
                name="pjcpf"
                placeholder="00.000.000/0000-00 ou 000.000.000-00"
                required
                onChange={atualizarCampo}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="voce@email.com"
                autoComplete="email"
                required
                onChange={atualizarCampo}
              />
            </div>

            <div className="field">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                autoComplete="tel"
                onChange={atualizarCampo}
              />
            </div>

            <div className="field field-row3">
              <div>
                <label htmlFor="pais">País</label>
                <input
                  type="text"
                  id="pais"
                  name="pais"
                  placeholder="País"
                  onChange={atualizarCampo}
                />
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  placeholder="Cidade"
                  onChange={atualizarCampo}
                />
              </div>
              <div>
                <label htmlFor="estado">Estado</label>
                <input
                  type="text"
                  id="estado"
                  name="estado"
                  placeholder="Estado"
                  onChange={atualizarCampo}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Mínimo de 8 caracteres"
                autoComplete="new-password"
                required
                minLength="8"
                onChange={atualizarCampo}
              />
            </div>

            <div className="field">
              <label htmlFor="confirma-senha">Confirme a senha</label>
              <input
                type="password"
                id="confirma-senha"
                name="confirma_senha"
                placeholder="Repita a senha"
                autoComplete="new-password"
                required
                onChange={atualizarCampo}
                className={
                  confirmaSenha && senha !== confirmaSenha ? "invalid" : ""
                }
              />
              <span className="field-error" id="erro-senha">
                {confirmaSenha && senha !== confirmaSenha
                  ? "As senhas não coincidem."
                  : ""}
              </span>
            </div>

            <hr className="formdiv" />

            <div className="photoupload">
              <span className="photo">Foto</span>
              <div
                className="photocircle"
                id="photocircle"
                role="button"
                tabIndex="0"
                aria-label="Selecionar foto de perfil"
                onClick={escolherFoto}
                onKeyDown={escolherFotoPeloTeclado}
              >
                {foto ? (
                  <img src={foto} alt="Foto de perfil selecionada" />
                ) : (
                  <span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://w3.org"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="3.4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M4.5 19.2c1.6-3.2 4.4-4.8 7.5-4.8s5.9 1.6 7.5 4.8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}
              </div>
              <button type="button" className="photobtn" onClick={escolherFoto}>
                Escolher Imagem
              </button>
              <input
                type="file"
                id="photoinput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={mostrarFoto}
              />
            </div>

            <div className="field">
              <label htmlFor="skillsinput">Habilidades</label>
              <div className="inputbox" id="skillsbox">
                {habilidades.map((nome) => (
                  <span className="chip" key={nome}>
                    {nome}
                    <button
                      type="button"
                      onClick={() => removerHabilidade(nome)}
                      aria-label={"Remover " + nome}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  id="skillsinput"
                  placeholder="Digite e pressione Enter (ex: Figma, React)"
                  value={habilidadeDigitada}
                  onChange={digitarHabilidade}
                  onBlur={adicionarHabilidade}
                  onKeyDown={verificarTeclaHabilidade}
                />
              </div>
              <span className="hint">
                Pressione Enter ou vírgula para adicionar cada habilidade.
              </span>
              <input
                type="hidden"
                id="skillshidden"
                name="habilidades"
                value={habilidades.join(", ")}
                readOnly
              />
            </div>

            <div className="field">
              <label htmlFor="projetos-exp">Projetos / experiências</label>
              <textarea
                id="projetos-exp"
                name="projetos_experiencias"
                placeholder="Conte brevemente sobre projetos ou experiências relevantes"
                onChange={atualizarCampo}
              ></textarea>
            </div>

            <div className="field">
              <label htmlFor="portfolio">Portfólio</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                placeholder="https://seuportfolio.com"
                onChange={atualizarCampo}
              />
            </div>

            <div className="field">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="https://linkedin.com"
                onChange={atualizarCampo}
              />
            </div>

            <div className="field">
              <label htmlFor="github">GitHub</label>
              <input
                type="url"
                id="github"
                name="github"
                placeholder="https://github.com"
                onChange={atualizarCampo}
              />
            </div>

            <div className="checkbox-row">
              <input
                type="checkbox"
                id="termos"
                name="termos"
                onChange={atualizarCampo}
                required
              />
              <label htmlFor="termos">
                Li e concordo com os{" "}
                <a href="#">Termos de Política e Privacidade</a>.
              </label>
            </div>

            <button type="submit" className="btncad">
              Cadastrar-se
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
