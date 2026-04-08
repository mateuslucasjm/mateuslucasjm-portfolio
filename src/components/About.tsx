import { useState } from 'react';
import './About.css';

const slides = [
  {
    image: 'https://placehold.co/600x260/1a1a2e/6366f1?text=Sobre+Mim',
    text: 'Tenho 21 anos e sou estudante de Sistemas de Informação na Uniube, em Ponte Nova/MG.',
  },
  {
    image: 'https://placehold.co/600x260/1a1a2e/818cf8?text=Tecnologia',
    text: 'Me interesso por tecnologia e estou sempre em busca de novos desafios e oportunidades na área. Gosto especialmente de tudo que envolva lógica, matemática e programação.',
  },
  {
    image: 'https://placehold.co/600x260/1a1a2e/6366f1?text=Lazer',
    text: 'Além disso, sou fã de futebol e torcedor do Cruzeiro (o maior time de Minas Gerais 💙). Nos fins de semana, costumo jogar vôlei e futebol, e frequento a academia desde 2023.',
  },
  {
    image: 'https://placehold.co/600x260/1a1a2e/818cf8?text=Séries',
    text: 'No meu tempo livre, gosto de assistir séries dos anos 2000 como Smallville, Supernatural e The Office — mesmo tendo nascido em 2004',
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <section id="sobre" className="section about">
      <h2 className="section-title">Sobre Mim</h2>

      <div className="about-carousel">
        <button className="carousel-btn carousel-btn-left" onClick={prev} aria-label="Anterior">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="about-card" key={current}>
          <div className="about-card-text">
            <p>{slides[current].text}</p>
          </div>
        </div>

        <button className="carousel-btn carousel-btn-right" onClick={next} aria-label="Próximo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
