import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/img/icon.png";
import { Menu, X, ShoppingBag, User } from "react-feather";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Comprar carro", path: "/comprar-carro" },
    { name: "Alugar carro", path: "/alugar-carro" },
    { name: "Sobre nós", path: "/sobre-nos" },
    { name: "Contactos", path: "/contactos" }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={icon} alt="CarroJá" className="w-24 object-contain" />
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* AÇÕES */}
        <div className="flex items-center space-x-4">
          

          {/* Ícones */}
          <button aria-label="Carrinho" className="relative">
            <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </button>

          <button aria-label="Login">
            <User className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
          </button>

          {/* BOTÃO MENU MOBILE */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
