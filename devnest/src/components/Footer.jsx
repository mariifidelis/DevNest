//Ana Carolina - 10771387         |Mariana Fidelis - 10721308

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_name">
        <h3>DevNest</h3>
        <p>
          Conheça um novo mundo.
          <br />
          De inovação, tecnologia e aprendizado.
        </p>
      </div>

       <nav className="footer_nav">
        <h4>Navegação</h4>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/cadastro">Cadastre-se</Link></li>
        </ul>
      </nav>

      <div className="footer__contact">
        <h4>Dúvidas?</h4>

        <form className="footer__form">
          <input
            className="footer__input"
            type="text"
            placeholder="Nome"
            aria-label="Nome"
          />

          <input
            className="footer__input"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />

          <textarea
            className="footer__input footer__textarea"
            placeholder="Sua dúvida"
            aria-label="Sua dúvida"
          />

          <button className="button-enviar" type="button">
            Enviar!
          </button>
        </form>
      </div>
      
      <div className="footer__bottom">
        <p>© 2026 DevNest</p>
      </div>
    </footer>
  );
}