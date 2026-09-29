/* ---------------- DEVNEST - JAVASCRIPT ----------------
   funções e interações do site
*/

(function () {
    'use strict';

    /* ---------------- SELETORES ---------------- */

    var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
    var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

    /* ---------------- MENU ---------------- */

    function initMenu() {
        $$('.menu-toggle, .nav-toggle').forEach(function (toggle) {
            var wrapper = toggle.closest('.nav') || toggle.closest('.container') || toggle.parentElement;
            var menu = wrapper ? wrapper.querySelector('.main-nav') : null;
            if (!menu) { return; }

            toggle.addEventListener('click', function (e) {
                e.stopPropagation();
                var aberto = menu.classList.toggle('open');
                toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
                toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
            });

            document.addEventListener('click', function (e) {
                if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                    menu.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    menu.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    /* ---------------- VIDEO ---------------- */

    function initVideo() {
        $$('video[autoplay]').forEach(function (video) {
            video.muted = true;
            video.defaultMuted = true;
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');

            var tentarTocar = function () {
                var p = video.play();
                if (p && typeof p.catch === 'function') {
                    p.catch(function () { });
                }
            };

            if (video.readyState >= 2) {
                tentarTocar();
            } else {
                video.addEventListener('loadeddata', tentarTocar, { once: true });
            }

            document.addEventListener('visibilitychange', function () {
                if (!document.hidden) { tentarTocar(); }
            });
        });
    }

    /* ---------------- FILTROS DE PROJETOS ---------------- */

    function initFiltros() {
        var botoes = $$('.filter-btn');
        var cards = $$('.project-card');
        if (!botoes.length || !cards.length) { return; }

        botoes.forEach(function (botao) {
            botao.addEventListener('click', function () {
                var filtro = botao.getAttribute('data-filter') || 'all';

                botoes.forEach(function (b) { b.classList.remove('active'); });
                botao.classList.add('active');

                cards.forEach(function (card) {
                    var categoria = card.getAttribute('data-category');
                    card.hidden = !(filtro === 'all' || categoria === filtro);
                });
            });
        });
    }

    /* ---------------- CARDS DE PROJETOS ---------------- */

    function initCardsProjeto() {
        $$('.project-card .card-arrow').forEach(function (link) {
            link.addEventListener('click', function () {
                var card = link.closest('.project-card');
                if (!card) { return; }

                var titulo = card.querySelector('h2');
                var descricao = card.querySelector('p');
                var rodape = card.querySelector('.card-footer small');
                var area = card.querySelector('.card-header b');
                var imagem = card.querySelector('.card-image');
                var valor = '';
                var cliente = '';

                if (rodape) {
                    var partes = rodape.textContent.split('·');
                    cliente = (partes[0] || '').trim();
                    valor = (partes[1] || '').trim();
                }

                var dados = {
                    titulo: titulo ? titulo.textContent.trim() : '',
                    descricao: descricao ? descricao.textContent.trim() : '',
                    valor: valor,
                    cliente: cliente,
                    area: area ? area.textContent.trim() : '',
                    foto: imagem ? (imagem.style.backgroundImage || imagem.style.getPropertyValue('--photo')) : ''
                };

                try {
                    sessionStorage.setItem('devnestProjeto', JSON.stringify(dados));
                } catch (err) { }
            });
        });
    }

    /* ---------------- DETALHES DO PROJETO ---------------- */

    function initDetalheProjeto() {
        var titulo = document.getElementById('titleprojeto');
        if (!titulo) { return; }

        var dados;
        try {
            dados = JSON.parse(sessionStorage.getItem('devnestProjeto') || 'null');
        } catch (err) { dados = null; }
        if (!dados) { return; }

        var imagem = document.getElementById('imgprojeto');
        var orcamento = document.getElementById('detailBudget');
        var area = document.getElementById('detailArea');
        var descricao = document.getElementById('detailDescription');

        if (dados.titulo) { titulo.textContent = dados.titulo.toUpperCase(); }
        if (imagem && dados.foto) {
            imagem.style.setProperty('--photo', dados.foto);
            imagem.style.backgroundImage = dados.foto;
        }
        if (orcamento && dados.valor) { orcamento.textContent = dados.valor; }
        if (area && dados.area) { area.textContent = dados.area.toUpperCase(); }
        if (descricao && dados.descricao) { descricao.textContent = dados.descricao; }
    }

    /* ---------------- LOGIN ---------------- */

    function initLogin() {
        var form = document.getElementById('loginform');
        if (!form) { return; }

        /* validação do cadastro */
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var usuario = document.getElementById('login-user');
            var senha = document.getElementById('login-pass');
            var valido = true;

            [usuario, senha].forEach(function (campo) {
                if (!campo) { return; }
                var vazio = campo.value.trim() === '';
                campo.classList.toggle('invalid', vazio);
                if (vazio) { valido = false; }
            });

            if (!valido) {
                alert('Preencha o usuário e a senha para entrar.');
                return;
            }

            window.location.href = 'perfil.html';
        });

        $$('#loginform input').forEach(function (campo) {
            campo.addEventListener('input', function () {
                campo.classList.remove('invalid');
            });
        });

        $$('.social-btn').forEach(function (botao) {
            botao.addEventListener('click', function () {
                alert('Login social em breve!');
            });
        });
    }

    /* ---------------- CADASTRO ---------------- */

    function initCadastro() {
        var form = document.getElementById('regiform');
        if (!form) { return; }

        var feedback = document.getElementById('form-feedback');
        var erroSenha = document.getElementById('erro-senha');
        var senha = document.getElementById('senha');
        var confirma = document.getElementById('confirma-senha');

        var circulo = document.getElementById('photocircle');
        var botaoFoto = $('.photobtn');
        var inputFoto = document.getElementById('photoinput');

        function abrirSeletor() { if (inputFoto) { inputFoto.click(); } }

        if (circulo) {
            circulo.addEventListener('click', abrirSeletor);
            circulo.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    abrirSeletor();
                }
            });
        }
        if (botaoFoto) { botaoFoto.addEventListener('click', abrirSeletor); }

        if (inputFoto) {
            inputFoto.addEventListener('change', function () {
                var arquivo = inputFoto.files && inputFoto.files[0];
                if (!arquivo || !circulo) { return; }

                var leitor = new FileReader();
                leitor.onload = function (ev) {
                    circulo.innerHTML = '';
                    var img = document.createElement('img');
                    img.src = ev.target.result;
                    img.alt = 'Foto de perfil selecionada';
                    circulo.appendChild(img);
                };
                leitor.readAsDataURL(arquivo);
            });
        }

        /* habilidades */
        var caixaSkills = document.getElementById('skillsbox');
        var inputSkills = document.getElementById('skillsinput');
        var hiddenSkills = document.getElementById('skillshidden');
        var habilidades = [];

        function atualizarSkills() {
            $$('.chip', caixaSkills).forEach(function (chip) { chip.remove(); });

            habilidades.forEach(function (nome, indice) {
                var chip = document.createElement('span');
                chip.className = 'chip';
                chip.textContent = nome;

                var remover = document.createElement('button');
                remover.type = 'button';
                remover.textContent = '×';
                remover.setAttribute('aria-label', 'Remover ' + nome);
                remover.addEventListener('click', function () {
                    habilidades.splice(indice, 1);
                    atualizarSkills();
                });

                chip.appendChild(remover);
                caixaSkills.insertBefore(chip, inputSkills);
            });

            if (hiddenSkills) { hiddenSkills.value = habilidades.join(', '); }
        }

        function adicionarSkill(valor) {
            var nome = (valor || '').trim().replace(/,$/, '').trim();
            if (nome && habilidades.indexOf(nome) === -1) {
                habilidades.push(nome);
                atualizarSkills();
            }
        }

        if (caixaSkills && inputSkills) {
            inputSkills.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ',') {
                    e.preventDefault();
                    adicionarSkill(inputSkills.value);
                    inputSkills.value = '';
                } else if (e.key === 'Backspace' && inputSkills.value === '' && habilidades.length) {
                    habilidades.pop();
                    atualizarSkills();
                }
            });

            inputSkills.addEventListener('blur', function () {
                adicionarSkill(inputSkills.value);
                inputSkills.value = '';
            });
        }

        /* confirmação de senha */
        function conferirSenha() {
            if (!senha || !confirma) { return true; }
            if (confirma.value === '') {
                if (erroSenha) { erroSenha.textContent = ''; }
                confirma.classList.remove('invalid');
                return false;
            }
            var igual = senha.value === confirma.value;
            if (erroSenha) { erroSenha.textContent = igual ? '' : 'As senhas não coincidem.'; }
            confirma.classList.toggle('invalid', !igual);
            return igual;
        }

        if (confirma) { confirma.addEventListener('input', conferirSenha); }
        if (senha) { senha.addEventListener('input', conferirSenha); }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var obrigatorios = $$('#regiform [required]');
            var valido = true;
            var primeiroErro = null;

            obrigatorios.forEach(function (campo) {
                var ok = campo.type === 'checkbox' ? campo.checked : campo.value.trim() !== '';
                if (campo.type === 'email' && ok) {
                    ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim());
                }
                if (campo.id === 'senha' && ok) {
                    ok = campo.value.length >= 8;
                }
                campo.classList.toggle('invalid', !ok);
                if (!ok) {
                    valido = false;
                    if (!primeiroErro) { primeiroErro = campo; }
                }
            });

            if (senha && confirma && senha.value !== confirma.value) {
                valido = false;
                confirma.classList.add('invalid');
                if (erroSenha) { erroSenha.textContent = 'As senhas não coincidem.'; }
                if (!primeiroErro) { primeiroErro = confirma; }
            }

            if (!valido) {
                if (feedback) {
                    feedback.style.display = 'block';
                    feedback.style.background = '#fdeaee';
                    feedback.style.color = '#b23049';
                    feedback.textContent = 'Revise os campos destacados antes de continuar.';
                }
                if (primeiroErro) {
                    primeiroErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    primeiroErro.focus({ preventScroll: true });
                }
                return;
            }

            if (feedback) {
                feedback.style.display = 'block';
                feedback.style.background = '#eaf7ee';
                feedback.style.color = '#1c7a3d';
                feedback.textContent = 'Cadastro realizado com sucesso! Redirecionando para o seu perfil...';
                feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            setTimeout(function () {
                window.location.href = 'perfil.html';
            }, 1200);
        });

        $$('#regiform input, #regiform textarea').forEach(function (campo) {
            campo.addEventListener('input', function () { campo.classList.remove('invalid'); });
        });
    }

    /* ---------------- PROPOSTA ---------------- */

    function initProposta() {
        var form = document.getElementById('propostaForm');
        if (!form) { return; }
        
        var dados;
        try {
            dados = JSON.parse(sessionStorage.getItem('devnestProjeto') || 'null');
        } catch (err) { dados = null; }

        if (dados) {
            var campoProjeto = document.getElementById('propostaprojeto');
            var campoCliente = document.getElementById('propostacliente');
            var campoValor = document.getElementById('proposalValue');
            if (campoProjeto && dados.titulo) { campoProjeto.value = dados.titulo; }
            if (campoCliente && dados.cliente) { campoCliente.value = dados.cliente; }
            if (campoValor && dados.valor) { campoValor.placeholder = dados.valor; }
        }

        var enviar = form.querySelector('.main-btn');

        function validarEEnviar(e) {
            if (e) { e.preventDefault(); }

            var obrigatorios = $$('#propostaForm [required]');
            var valido = true;
            var primeiroErro = null;

            obrigatorios.forEach(function (campo) {
                var ok = campo.value.trim() !== '';
                campo.classList.toggle('invalid', !ok);
                if (!ok) {
                    valido = false;
                    if (!primeiroErro) { primeiroErro = campo; }
                }
            });

            if (!valido) {
                alert('Preencha valor, prazo e mensagem antes de enviar a proposta.');
                if (primeiroErro) { primeiroErro.focus(); }
                return;
            }

            alert('Proposta enviada com sucesso!');
            window.location.href = 'mpropostas.html';
        }

        form.addEventListener('submit', validarEEnviar);
        if (enviar) { enviar.addEventListener('click', validarEEnviar); }

        $$('#propostaForm .form-input, #propostaForm .form-textarea').forEach(function (campo) {
            campo.addEventListener('input', function () { campo.classList.remove('invalid'); });
        });
    }

    /* ---------------- CONTRATO ---------------- */

    function initContrato() {
        var check = document.getElementById('contcheck');
        var botao = $('.contractButton');
        if (!check || !botao) { return; }

        var destino = botao.getAttribute('href');

        function atualizar() {
            var aceito = check.checked;
            botao.setAttribute('aria-disabled', aceito ? 'false' : 'true');
            if (aceito) {
                botao.setAttribute('href', destino);
            } else {
                botao.removeAttribute('href');
            }
        }

        check.addEventListener('change', atualizar);
        atualizar();

        botao.addEventListener('click', function (e) {
            if (!check.checked) {
                e.preventDefault();
                alert('É necessário aceitar os termos para fechar o contrato.');
                check.focus();
            }
        });
    }

    /* ---------------- DÚVIDAS ---------------- */

    function initDuvida() {
        $$('.button-enviar').forEach(function (botao) {
            botao.addEventListener('click', function () {
                var form = botao.closest('.footer__form');
                if (!form) { return; }

                var campos = $$('.footer__input', form);
                var vazio = campos.some(function (c) { return c.value.trim() === ''; });

                if (vazio) {
                    alert('Preencha nome, email e a sua dúvida antes de enviar.');
                    return;
                }

                alert('Dúvida enviada!\nEntraremos em contato pelo email');
                campos.forEach(function (c) { c.value = ''; });
            });
        });
    }

    /* ---------------- ENVIO DE DÚVIDA ---------------- */

    window.duvida = function () {
        alert('Dúvida enviada!\nEntraremos em contato pelo email');
    };

    /* ---------------- ANO DO RODAPÉ ---------------- */

    function initAno() {
        var ano = new Date().getFullYear();
        $$('.footer__bottom p, .footer-meta').forEach(function (el) {
            el.textContent = el.textContent.replace(/\b20\d{2}\b/, ano);
        });
    }

    /* ---------------- TEMA CLARO / ESCURO ---------------- */

    var CHAVE_TEMA = 'devnest-theme';

    function lerTema() {
        try { return localStorage.getItem(CHAVE_TEMA); } catch (err) { return null; }
    }

    function temaAtual() {
        var salvo = lerTema();
        if (salvo) { return salvo; }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark' : 'light';
    }

    function aplicarTema(tema) {
        document.documentElement.setAttribute('data-theme', tema);
        try { localStorage.setItem(CHAVE_TEMA, tema); } catch (err) { /* modo privado */ }

        $$('.theme-toggle').forEach(function (botao) {
            var escuro = tema === 'dark';
            botao.textContent = escuro ? '☀' : '☾';
            botao.setAttribute('aria-label', escuro ? 'Mudar para o tema claro' : 'Mudar para o tema escuro');
            botao.setAttribute('aria-pressed', escuro ? 'true' : 'false');
            botao.title = escuro ? 'Tema claro' : 'Tema escuro';
        });
    }

    function initTema() {
        var destinos = [];
        var nav = $('.header .nav');
        var perfil = $('.pheader .container');
        var login = $('.login');

        if (nav) { destinos.push(nav); }
        if (perfil) { destinos.push(perfil); }
        if (login && !nav && !perfil) { destinos.push(login); }

        destinos.forEach(function (alvo) {
            if (alvo.querySelector('.theme-toggle')) { return; }
            var botao = document.createElement('button');
            botao.type = 'button';
            botao.className = 'theme-toggle';
            botao.addEventListener('click', function () {
                aplicarTema(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
            });
            alvo.appendChild(botao);
        });

        aplicarTema(temaAtual());

        if (window.matchMedia) {
            var mq = window.matchMedia('(prefers-color-scheme: dark)');
            var aoMudar = function (e) {
                if (!lerTema()) { aplicarTema(e.matches ? 'dark' : 'light'); }
            };
            if (mq.addEventListener) { mq.addEventListener('change', aoMudar); }
            else if (mq.addListener) { mq.addListener(aoMudar); }
        }
    }

    /* ---------------- INICIALIZAÇÃO ---------------- */

    function init() {
        initMenu();
        initVideo();
        initFiltros();
        initCardsProjeto();
        initDetalheProjeto();
        initLogin();
        initCadastro();
        initProposta();
        initContrato();
        initDuvida();
        initAno();
        initTema();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();