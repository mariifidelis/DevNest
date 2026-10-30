//Ana Carolina - 10771387         |Mariana Fidelis - 10721308

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
     const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <main className="login">

            <div className="login-blob b1" aria-hidden="true"></div>
            <div className="login-blob b2" aria-hidden="true"></div>
            <div className="login-blob b3" aria-hidden="true"></div>

            <h1 className="login_icon">
                <Link href="/">DevNest</Link>
            </h1>
            <p className="longin_tagline">Conecte-se. Crie. Colabore.</p>

            <div className="logincard">
                <form className="loginform" id="loginform">
                    <div className="cardform">
                        <label htmlFor="login-user" className="eyebrow-hide">Email/Nome de Usuário</label>

                        <input
                            type="text"
                            id="login-user"
                            name="usuario"
                            placeholder="EMAIL/NOME DE USUÁRIO"
                            autoComplete="username" required
                        />
                    </div>

                    <div className="cardform">
                        <label htmlFor="login-pass" className="eyebrow-hide"> Senha </label>

                        <input
                            type={mostrarSenha ? 'text' : 'password'}
                            id="login-pass"
                            name="senha"
                            placeholder="SENHA"
                            autoComplete="current-password" required />

                        <button
                            type="button" onClick={() => setMostrarSenha(!mostrarSenha)} > {mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                        </button>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block btn-lg">Entrar</button>

                </form>

                <p className="loginalt"> Não possui conta?
                    <Link href="/cadastro">Cadastre-se</Link>
                </p>

                <div className="divideror">ou</div>

                <div className="sociallogin">
                    <button type="button" className="social-btn" aria-label="Entrar com Google">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="7" y="17" fontFamily="JetBrains Mono, monospace" fontSize="17" fontWeight="700" fill="#717CB7"> G </text>
                        </svg>
                    </button>

                    <button type="button" className="social-btn" aria-label="Entrar com Apple">
                        <svg viewBox="0 0 24 24" fill="#717CB7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.36 12.65c-.02-2.02 1.65-2.99 1.72-3.03-.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.42.73-3.05.73-.63 0-1.6-.71-2.63-.69-1.35.02-2.6.78-3.29 1.99-1.4 2.44-.36 6.05 1 8.03.67.97 1.46 2.05 2.5 2.01 1-.04 1.38-.65 2.6-.65s1.56.65 2.63.63c1.09-.02 1.77-.98 2.43-1.96.77-1.12 1.08-2.21 1.1-2.27-.02-.01-2.1-.81-2.09-3.21zM14.4 5.62c.55-.68.93-1.6.83-2.53-.8.03-1.77.53-2.34 1.2-.51.6-.96 1.55-.84 2.46.9.07 1.8-.45 2.35-1.13z" />
                        </svg>
                    </button>
                </div>
            </div>

        </main>
    );
}

