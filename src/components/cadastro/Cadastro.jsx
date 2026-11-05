//Ana Carolina - 10771387         |Mariana Fidelis - 10721308

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Cadastro() {
    const [formData, setFormData] = useState({
        nome: "",
        profissao: "",
        area: "",
        pjcpf: "",
        email: "",
        telefone: "",
        pais: "",
        cidade: "",
        estado: "",
        senha: "",
        confirma_senha: "",
        projetos_experiencias: "",
        portfolio: "",
        linkedin: "",
        github: "",
        termos: false
    });

    const [habilidades, setHabilidades] = useState([]);
    const [skillInput, setSkillInput] = useState("");
    const [feedback, setFeedback] = useState({ message: "", type: "" });




    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    function adicionarSkill() {
        const nome = skillInput.trim();
        if (nome !== "" && !habilidades.includes(nome)) {
            setHabilidades([...habilidades, nome]);
        }
        setSkillInput("");
    }

    function removerSkill(nome) {
        setHabilidades(habilidades.filter((habilidade) => habilidade !== nome));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulário enviado! Verifique o console do navegador.");
        console.log(formData);
    };

    return (
        <div className="topbar">
            <header className="header">
                <div className="logo">
                    <Link href="/">
                        <img src="img/logo.png" alt="Logo Devenest" />
                    </Link>
                </div>
                <nav className="nav">
                    <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
                    <ul className="main-nav" aria-label="Navegação principal">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projetos">Projetos</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="name">
                <div className="login-blob b1" aria-hidden="true"></div>
                <div className="login-blob b2" aria-hidden="true"></div>
                <div className="login-blob b3" aria-hidden="true"></div>

                <h1 className="nametag">DevNest</h1>

                <div className="cadastrocard">
                    <h2>Cadastro</h2>

                    <form id="regiform" onSubmit={handleSubmit} noValidate>
                        <div className="field">
                            <label htmlFor="nome">Nome completo</label>
                            <input type="text" id="nome" name="nome" placeholder="Como você quer ser chamado" required onChange={handleChange} />
                        </div>

                        <div className="field">
                            <label htmlFor="profissao">Profissão</label>
                            <input type="text" id="profissao" name="profissao" placeholder="Ex: Desenvolvedor(a) Front-end" required onChange={handleChange} />
                        </div>

                        <div className="field">
                            <label htmlFor="area">Área de atuação</label>
                            <input type="text" id="area" name="area" placeholder="Ex: Web, Dados, Cyber, UI/UX" onChange={handleChange} />
                        </div>

                        <div className="field">
                            <label htmlFor="pjcpf">PJ / CPF</label>
                            <input type="text" id="pjcpf" name="pjcpf" placeholder="00.000.000/0000-00 ou 000.000.000-00" required onChange={handleChange} />
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="voce@email.com" autoComplete="email" required onChange={handleChange} />
                        </div>

                        <div className="field">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" autoComplete="tel" onChange={handleChange} />
                        </div>

                        <div className="field field-row3">
                            <div>
                                <label htmlFor="pais">País</label>
                                <input type="text" id="pais" name="pais" placeholder="País" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" id="cidade" name="cidade" placeholder="Cidade" onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="estado">Estado</label>
                                <input type="text" id="estado" name="estado" placeholder="Estado" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" name="senha" placeholder="Mínimo de 8 caracteres" autoComplete="new-password" required minLength="8" onChange={handleChange} />
                        </div>

                        <div className="field">
                            <label htmlFor="confirma-senha">Confirme a senha</label>
                            <input type="password" id="confirma-senha" name="confirma_senha" placeholder="Repita a senha" autoComplete="new-password" required onChange={handleChange} />
                        </div>

                        <hr className="formdiv" />

                        <div className="photoupload">
                            <span className="photo">Foto</span>
                            <div className="photocircle" id="photocircle" role="button" tabIndex="0" aria-label="Selecionar foto de perfil">
                                <span>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
                                        <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
                                        <path d="M4.5 19.2c1.6-3.2 4.4-4.8 7.5-4.8s5.9 1.6 7.5 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </div>
                            <button type="button" className="photobtn">Escolher Imagem</button>
                            <input type="file" id="photoinput" accept="image/*" style={{ display: "none" }} />
                        </div>

                        <div className="field">
                            <label htmlFor="skillsinput">Habilidades</label>
                            <div className="inputbox" id="skillsbox">
                                {habilidades.map((nome) => (
                                    <span className="chip" key={nome}>
                                        {nome}
                                        <button type="button" onClick={() => removerSkill(nome)}>×</button>
                                    </span>
                                ))}
                                <input
                                    type="text"
                                    id="skillsinput"
                                    placeholder="Digite e pressione Enter (ex: Figma, React)"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === ",") {
                                            e.preventDefault();
                                            adicionarSkill();
                                        }
                                    }}
                                />
                            </div>
                            <span className="hint">Pressione Enter ou vírgula para adicionar cada habilidade.</span>
                            <input type="hidden" name="habilidades" value={habilidades.join(", ")} readOnly />
                        </div>

                        <div className="field">
                            <label htmlFor="projetos-exp">Projetos / experiências</label>
                            <textarea id="projetos-exp" name="projetos_experiencias" placeholder="Conte brevemente sobre projetos ou experiências relevantes" onChange={handleChange}></textarea>
                        </div>

                        <div className="field">
                            <label htmlFor="portfolio">Portfólio</label>
                            <input type="url" id="portfolio" name="portfolio" placeholder="https://seuportfolio.com" onChange={handleChange} />
                        </div>

                        <div className="field">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com" onChange={handleChange} />
                        </div>

                        <div className="field">
                            <label htmlFor="github">GitHub</label>
                            <input type="url" id="github" name="github" placeholder="https://github.com" onChange={handleChange} />
                        </div>

                        <div className="checkbox-row">
                            <input type="checkbox" id="termos" name="termos" onChange={handleChange} required />
                            <label htmlFor="termos">Li e concordo com os <a href="#">Termos de Política e Privacidade</a>.</label>
                        </div>

                        <button type="submit" className="btncad">Cadastrar-se</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

