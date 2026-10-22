//Ana Carolina - 10771387         |Mariana Fidelis - 10721308

"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
   <header className="header">
      <div className="logo">
        <Link href="/"><img src="/img/logo.png" alt="Logo Devenest" /></Link>
      </div>
      <nav className="nav">
        <button className="menu-toggle" type="button"
         aria-label={menuAberto ? "Fechar menu" : "Abrir menu"} 
         aria-expanded={menuAberto}
         onClick={() => setMenuAberto(!menuAberto)}> ☰
        </button>
        <ul className={`main-nav ${menuAberto ? 'open' : ''}`} aria-label="Navegação principal">
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/cadastro" style={{ color: '#0e21ce' }}>Cadastre-se</Link></li>
        </ul>
      </nav>
    </header>
  );
}
