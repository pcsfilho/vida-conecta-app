import { Link } from "react-router-dom";
import sesiLogo from "../assets/sesisaude.png";

const Header = () => {
  return (
    <header
      className="fixed w-full top-0 z-50"
      style={{ backgroundColor: "#212121" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={sesiLogo} alt="SESI Saúde" className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Início
            </Link>
            <Link
              to="/para-empresas"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Para Empresas
            </Link>
            <a
              href="#recursos"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Recursos
            </a>
            <a
              href="#contato"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contato
            </a>
            {/* <a
              href="#entrar"
              className="bg-primary-500 text-white px-5 py-2 rounded-lg hover:bg-primary-600 font-semibold transition-colors"
            >
              Entrar
            </a> */}
          </div>

          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
