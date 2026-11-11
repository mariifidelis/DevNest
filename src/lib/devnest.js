// Funções do site, separadas por assunto.
// querySelector procura um elemento. querySelectorAll procura vários.
// onclick, onsubmit e oninput indicam o que fazer em cada evento.

let preferenciaTema = null;

function fecharMenus() {
  const botao = document.querySelector(".menu-toggle");
  if (botao && botao.getAttribute("aria-expanded") === "true") {
    // O clique usa a mesma função de abrir/fechar que já existe no Header.
    botao.click();
  }

  const menuPerfil = document.querySelector(".pheader .main-nav");
  const botaoPerfil = document.querySelector(".nav-toggle");
  if (menuPerfil && botaoPerfil) {
    menuPerfil.classList.remove("open");
    botaoPerfil.setAttribute("aria-expanded", "false");
    botaoPerfil.setAttribute("aria-label", "Abrir menu");
  }
}

function iniciarMenus() {
  const botaoPerfil = document.querySelector(".nav-toggle");
  const menuPerfil = document.querySelector(".pheader .main-nav");

  if (botaoPerfil && menuPerfil) {
    botaoPerfil.onclick = function (evento) {
      evento.stopPropagation();
      const aberto = menuPerfil.classList.toggle("open");
      botaoPerfil.setAttribute("aria-expanded", aberto);
      if (aberto) {
        botaoPerfil.setAttribute("aria-label", "Fechar menu");
      } else {
        botaoPerfil.setAttribute("aria-label", "Abrir menu");
      }
    };
  }

  document.onclick = function (evento) {
    const navegacao = evento.target.closest(
      ".header .nav, .pheader .container",
    );
    if (!navegacao) {
      fecharMenus();
    }
  };

  document.onkeydown = function (evento) {
    if (evento.key === "Escape") {
      fecharMenus();
    }
  };
}

function tocarVideo(video) {
  video.muted = true;
  const tentativa = video.play();
  if (tentativa) {
    // O navegador pode bloquear a reprodução automática.
    tentativa.catch(function () {});
  }
}

function iniciarVideos() {
  const videos = document.querySelectorAll("video[autoplay]");
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.onloadeddata = function () {
      tocarVideo(video);
    };
    if (video.readyState >= 2) {
      tocarVideo(video);
    }
  }

  document.onvisibilitychange = function () {
    if (!document.hidden) {
      for (let i = 0; i < videos.length; i++) {
        tocarVideo(videos[i]);
      }
    }
  };
}

function iniciarFiltros() {
  const botoes = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  for (let i = 0; i < botoes.length; i++) {
    const botao = botoes[i];
    botao.onclick = function () {
      const filtro = botao.getAttribute("data-filter");
      for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("active");
      }
      botao.classList.add("active");

      for (let j = 0; j < cards.length; j++) {
        const categoria = cards[j].getAttribute("data-category");
        if (filtro === "all" || filtro === categoria) {
          cards[j].hidden = false;
        } else {
          cards[j].hidden = true;
        }
      }
    };
  }
}

function iniciarCards() {
  const links = document.querySelectorAll(".project-card .card-arrow");
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.onclick = function () {
      const card = link.closest(".project-card");
      const partes = card
        .querySelector(".card-footer small")
        .textContent.split("·");
      const imagem = card.querySelector(".card-image");
      const dados = {
        titulo: card.querySelector("h2").textContent.trim(),
        descricao: card.querySelector("p").textContent.trim(),
        cliente: partes[0].trim(),
        valor: partes[1].trim(),
        area: card.querySelector(".card-header b").textContent.trim(),
        foto:
          imagem.style.backgroundImage ||
          imagem.style.getPropertyValue("--photo"),
      };

      // Guarda a seleção nesta aba para a próxima página.
      // JSON transforma o objeto em texto para poder guardá-lo.
      try {
        sessionStorage.setItem("devnestProjeto", JSON.stringify(dados));
      } catch (erro) {
        // O navegador pode bloquear o armazenamento.
      }
    };
  }
}

function lerProjeto() {
  try {
    const texto = sessionStorage.getItem("devnestProjeto");
    return JSON.parse(texto);
  } catch (erro) {
    return null;
  }
}

function iniciarDetalhes() {
  const titulo = document.getElementById("titleprojeto");
  const dados = lerProjeto();
  if (!titulo || !dados) {
    return;
  }

  if (dados.titulo) titulo.textContent = dados.titulo.toUpperCase();
  if (dados.valor)
    document.getElementById("detailBudget").textContent = dados.valor;
  if (dados.area)
    document.getElementById("detailArea").textContent =
      dados.area.toUpperCase();
  if (dados.descricao)
    document.getElementById("detailDescription").textContent = dados.descricao;
  if (dados.foto) {
    const imagem = document.getElementById("imgprojeto");
    imagem.style.setProperty("--photo", dados.foto);
    imagem.style.backgroundImage = dados.foto;
  }
}

function iniciarLogin() {
  const formulario = document.getElementById("loginform");
  if (!formulario) return;

  formulario.onsubmit = function (evento) {
    evento.preventDefault();
    const campos = formulario.querySelectorAll("input");
    let valido = true;
    for (let i = 0; i < campos.length; i++) {
      const vazio = campos[i].value.trim() === "";
      campos[i].classList.toggle("invalid", vazio);
      if (vazio) valido = false;
    }
    if (!valido) {
      alert("Preencha o usuário e a senha para entrar.");
      return;
    }
    window.location.href = "/perfil";
  };

  const campos = formulario.querySelectorAll("input");
  for (let i = 0; i < campos.length; i++) {
    campos[i].oninput = function () {
      campos[i].classList.remove("invalid");
    };
  }
  const botoes = document.querySelectorAll(".social-btn");
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      alert("Login social em breve!");
    };
  }
}

function iniciarProposta() {
  const formulario = document.getElementById("propostaForm");
  if (!formulario) return;

  const dados = lerProjeto();
  if (dados) {
    if (dados.titulo)
      document.getElementById("propostaprojeto").value = dados.titulo;
    if (dados.cliente)
      document.getElementById("propostacliente").value = dados.cliente;
    if (dados.valor)
      document.getElementById("proposalValue").placeholder = dados.valor;
  }

  function enviarProposta(evento) {
    evento.preventDefault();
    const campos = formulario.querySelectorAll("[required]");
    let primeiroErro = null;
    for (let i = 0; i < campos.length; i++) {
      const vazio = campos[i].value.trim() === "";
      campos[i].classList.toggle("invalid", vazio);
      if (vazio && !primeiroErro) primeiroErro = campos[i];
    }
    if (primeiroErro) {
      alert("Preencha valor, prazo e mensagem antes de enviar a proposta.");
      primeiroErro.focus();
      return;
    }
    alert("Proposta enviada com sucesso!");
    window.location.href = "/mpropostas";
  }

  formulario.onsubmit = enviarProposta;
  formulario.querySelector(".main-btn").onclick = enviarProposta;
  const campos = formulario.querySelectorAll(".form-input, .form-textarea");
  for (let i = 0; i < campos.length; i++) {
    campos[i].oninput = function () {
      campos[i].classList.remove("invalid");
    };
  }
}

function iniciarContrato() {
  const aceite = document.getElementById("contcheck");
  const botao = document.querySelector(".contractButton");
  if (!aceite || !botao) return;

  function atualizarBotao() {
    if (aceite.checked) {
      botao.setAttribute("aria-disabled", "false");
      botao.setAttribute("href", "/contratofechado");
    } else {
      botao.setAttribute("aria-disabled", "true");
      botao.removeAttribute("href");
    }
  }

  aceite.onchange = atualizarBotao;
  atualizarBotao();
  botao.onclick = function (evento) {
    if (!aceite.checked) {
      evento.preventDefault();
      alert("É necessário aceitar os termos para fechar o contrato.");
      aceite.focus();
    }
  };
}

function iniciarDuvidas() {
  const botoes = document.querySelectorAll(".button-enviar");
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      const formulario = botoes[i].closest(".footer__form");
      const campos = formulario.querySelectorAll(".footer__input");
      for (let j = 0; j < campos.length; j++) {
        if (campos[j].value.trim() === "") {
          alert("Preencha nome, email e a sua dúvida antes de enviar.");
          return;
        }
      }
      alert("Dúvida enviada!\nEntraremos em contato pelo email");
      for (let j = 0; j < campos.length; j++) {
        campos[j].value = "";
      }
    };
  }
}

function atualizarAno() {
  const textos = document.querySelectorAll(".footer__bottom p, .footer-meta");
  for (let i = 0; i < textos.length; i++) {
    textos[i].textContent = textos[i].textContent.replace(
      /\b20\d{2}\b/,
      new Date().getFullYear(),
    );
  }
}

function lerTema() {
  try {
    return localStorage.getItem("devnest-theme");
  } catch (erro) {
    return null;
  }
}

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  try {
    localStorage.setItem("devnest-theme", tema);
  } catch (erro) {
    // A troca de cores funciona mesmo quando não é possível salvar.
  }

  const botoes = document.querySelectorAll(".theme-toggle");
  for (let i = 0; i < botoes.length; i++) {
    const botao = botoes[i];
    if (tema === "dark") {
      botao.textContent = "☀";
      botao.setAttribute("aria-label", "Mudar para o tema claro");
      botao.setAttribute("aria-pressed", "true");
      botao.title = "Tema claro";
    } else {
      botao.textContent = "☾";
      botao.setAttribute("aria-label", "Mudar para o tema escuro");
      botao.setAttribute("aria-pressed", "false");
      botao.title = "Tema escuro";
    }
  }
}

function iniciarTema() {
  let destino = document.querySelector(".header .nav");
  if (!destino) destino = document.querySelector(".pheader .container");
  if (!destino) destino = document.querySelector(".login");

  if (destino && !destino.querySelector(".theme-toggle")) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "theme-toggle";
    botao.onclick = function () {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        aplicarTema("light");
      } else {
        aplicarTema("dark");
      }
    };
    destino.appendChild(botao);
  }

  let tema = lerTema();
  if (window.matchMedia) {
    preferenciaTema = window.matchMedia("(prefers-color-scheme: dark)");
    preferenciaTema.onchange = function (evento) {
      if (!lerTema()) {
        if (evento.matches) aplicarTema("dark");
        else aplicarTema("light");
      }
    };
  }
  if (!tema) {
    if (preferenciaTema && preferenciaTema.matches) tema = "dark";
    else tema = "light";
  }
  aplicarTema(tema);
}

// Estas duas funções são chamadas pelo componente Comportamentos.
export function iniciarPagina() {
  iniciarMenus();
  iniciarVideos();
  iniciarFiltros();
  iniciarCards();
  iniciarDetalhes();
  iniciarLogin();
  iniciarProposta();
  iniciarContrato();
  iniciarDuvidas();
  atualizarAno();
  iniciarTema();
}

export function limparPagina() {
  // Os eventos de cada botão são substituídos com onclick na próxima página.
  // Aqui retiramos somente os eventos do documento e o botão de tema criado.
  document.onclick = null;
  document.onkeydown = null;
  document.onvisibilitychange = null;
  if (preferenciaTema) {
    preferenciaTema.onchange = null;
    preferenciaTema = null;
  }
  const botoes = document.querySelectorAll(".theme-toggle");
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].remove();
  }
}
