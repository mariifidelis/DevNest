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
        confirmarSenha: "",
        projetosExperiencias: "",
        portifolio: "",
        linkedin: "",
        github: "",
        termos: false,
        languages: [],
    });

    const [feedback, setfeedback] = useState("");

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (name === "languages") {
            let listaHabilidades = [...formData.languages];

            if (checked) {
                listaHabilidades.push(value);
            }
            else {
                listaHabilidades = listaHabilidades.filter((item) => item !== value);
            }

            setFormData({ ...formData, languages: listaHabilidades });
        } else {
            setDataForm({ ...dataForm, [name]: type === "checkbox" ? checked : value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!dataForm.nome || !dataForm.email || !dataForm.senha) {
            setfeedback("Por favor, preencha todos os campos obrigatórios.");

            setTimeout(() => {
                setfeedback("");
            }, 4000);
            return;
        };

        return (
            <div className="topbar">
                <header className="header">
                    <div className="logo">
                        <Link href="/page">
                            <img src="img/logo.png" alt="Logo Devenest" />
                        </Link>
                    </div>
                    <nav className="nav">
                        <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
                        <ul className="main-nav" aria-label="Navegação principal">
                            <li><Link href="/page">Home</Link></li>
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

                    <div className="cadastroCard">
                        <h2>Cadastro</h2>

                        {feedback && (
                            <div role="status" style={{ marginBottom: "20px", padding: "12px", borderRadius: "12px", background: "#fdeded", color: "#da1e28", textAlign: "center" }}>
                                {feedback}
                            </div>
                        )}

                        <form id="regiform" onSubmit={handleSubmit} noValidate>
                            <div className="field">
                                <label htmlFor="nome">Nome completo</label>
                                <input type="text" id="nome" name="nome" placeholder="Como você quer ser chamado" required value={dataForm.nome} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label htmlFor="profissao">Profissão</label>
                                <input type="text" id="profissao" name="profissao" placeholder="Ex: Desenvolvedor(a) Front-end" required value={dataForm.profissao} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label htmlFor="area">Área de atuação</label>
                                <input type="text" id="area" name="area" placeholder="Ex: Web, Dados, Cyber, UI/UX" value={dataForm.area} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label htmlFor="pjcpf">PJ / CPF</label>
                                <input type="text" id="pjcpf" name="pjcpf" placeholder="00.000.000/0000-00 ou 000.000.000-00" required value={dataForm.pjcpf} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="voce@email.com" autoComplete="email" required value={dataForm.email} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" autoComplete="tel" value={dataForm.telefone} onChange={handleChange} />
                            </div>

                            <div className="field field-row3">
                                <div>
                                    <label htmlFor="pais">País</label>
                                    <input type="text" id="pais" name="pais" placeholder="País" value={dataForm.pais} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="cidade">Cidade</label>
                                    <input type="text" id="cidade" name="cidade" placeholder="Cidade" value={dataForm.cidade} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="estado">Estado</label>
                                    <input type="text" id="estado" name="estado" placeholder="Estado" value={dataForm.estado} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" id="senha" name="senha" placeholder="Mínimo de 8 caracteres" autoComplete="new-password" required minLength="8" value={dataForm.senha} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label htmlFor="confirma-senha">Confirme a senha</label>
                                <input type="password" id="confirma-senha" name="confirma_senha" placeholder="Repita a senha" autoComplete="new-password" required value={dataForm.confirma_senha} onChange={handleChange} />
                            </div>

                            <hr className="formdiv" />

                            <div className="field">
                                <label>Habilidades Selecionadas</label>
                                <div className="checkbox-group" style={{ display: "flex", gap: "15px", margin: "10px 0" }}>
                                    <label>
                                        <input type="checkbox" name="languages" value="React" checked={dataForm.languages.includes("React")} onChange={handleChange} /> React
                                    </label>
                                    <label>
                                        <input type="checkbox" name="languages" value="Figma" checked={dataForm.languages.includes("Figma")} onChange={handleChange} /> Figma
                                    </label>
                                    <label>
                                        <input type="checkbox" name="languages" value="CSS" checked={dataForm.languages.includes("CSS")} onChange={handleChange} /> CSS
                                    </label>
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="projetos-exp">Projetos / experiências</label>
                                <textarea id="projetos-exp" name="projetos_experiencias" placeholder="Conte brevemente sobre projetos ou experiências relevantes" value={dataForm.projetos_experiencias} onChange={handleChange} />
                            </div>

                            <div className="field">
                                <label htmlFor="portfolio">Portfólio</label>
                                <input type="url" id="portfolio" name="portfolio" placeholder="https://seuportfolio.com" value={dataForm.portfolio} onChange={handleChange} />
                            </div>
                            <div className="field">
                                <label htmlFor="linkedin">LinkedIn</label>
                                <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com" value={dataForm.linkedin} onChange={handleChange} />
                            </div>
                            <div className="field">
                                <label htmlFor="github">GitHub</label>
                                <input type="url" id="github" name="github" placeholder="https://github.com" value={dataForm.github} onChange={handleChange} />
                            </div>

                            <div className="checkbox-row">
                                <input type="checkbox" id="termos" name="termos" required checked={dataForm.termos} onChange={handleChange} />
                                <label htmlFor="termos">Li e concordo com os <a href="#">Termos de Política e Privacidade</a>.</label>
                            </div>

                            <button type="submit" className="btncad">Cadastrar-se</button>

                        </form>
                    </div>
                </main>
            </div>
        );
    }
}


