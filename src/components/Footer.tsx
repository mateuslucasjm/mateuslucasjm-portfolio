import { portfolioData } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {portfolioData.about.name}. Todos os direitos reservados.</p>
    </footer>
  );
}
