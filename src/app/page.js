//Ana Carolina - 10771387         |Mariana Fidelis - 10721308


import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='topbar'>
       <Header />

    <main className="main">
      <section className='photo-mosaic'>
        <div className='mosaic-slogan'>
          <p>Talento que conecta</p>
          <br />
          <p>Oportunidade que transforma</p>
        </div>
        <img className="photo-tile p1" src="/img/logo.png" alt="Imagem 1" link="/sobre"/>
        <div className="photo-tile p2">
            <video src="/img/videogome2.mp4" autoPlay muted loop playsInline preload="auto"/></div>
          <img className="photo-tile p3" src="/img/cadhome.jpg" alt="Imagem 3"/>
          <img className="photo-tile p4" src="/img/home2.jpg" alt="Imagem 4"/>
          <img className="photo-tile p5" src="/img/home4.jpg" alt="Imagem 5"/>
          <img className="photo-tile p6" src="/img/homelogo.jpeg" alt="Imagem 6"/>
          <img className="photo-tile p7" src="/img/home3.jpg" alt="Imagem 7"/>
          <img className="photo-tile p9" src="/img/home9.jpeg" alt="Imagem 9"/>
          <div className="photo-tile p10">
            <video src="/img/videohome.mp4" poster="/img/home1.jpg" autoPlay muted loop playsInline preload="auto"/></div>
        </section>

        <section className="sobre_home">
          <div className="sobre-content">
            <h2>Sobre a DevNest</h2>
            <p>
              A DevNest é uma plataforma inovadora que conecta talentos da
              tecnologia com oportunidades de trabalho, promovendo o crescimento
              profissional e o desenvolvimento de projetos de impacto.
            </p>
            <a href="/sobre" className="btn">Saiba mais</a>
          </div>
        </section>

        <section className="projetos_home">
          <div className="projetos-content">
            <h2>Projetos em destaque</h2>
            <div className="projetos-lista">
              <div className="projeto-card">
                <h3>Aplicativo de Finanças</h3>
                <p>Desenvolvimento de um aplicativo para gerenciamento financeiro pessoal.</p>
              </div>
              <div className="projeto-card">
                <h3>Website Corporativo</h3>
                <p>Criação de um website responsivo para uma empresa de tecnologia.</p>
              </div>
              <div className="projeto-card">
                <h3>Plataforma de E-learning</h3>
                <p>Desenvolvimento de uma plataforma online para cursos e treinamentos.</p>
              </div>
            </div>
            <Link href="/projetos" className="btn">Ver todos os projetos</Link>
          </div>
        </section>

        <section className="Cadastre_se">
          <div className="cadastro-content">
            <h2>Cadastre-se na DevNest e venha fazer parte de um novo mundo de oportunidades</h2>
            <img src="/img/home6.jpeg" className="cadastro-img" alt="Profissionais de tecnologia trabalhando"/>
            <p>Junte-se à nossa comunidade de profissionais e descubra novas oportunidades de trabalho.</p>
            <a href="/cadastro" className="btn">Cadastre-se</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>


  
  );

}
