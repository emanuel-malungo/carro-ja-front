import React, { useState } from "react";
import icon from "../../assets/img/icon.png";
import { Menu, X, Search, ShoppingBag, User } from "react-feather";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <a href="#" className="flex items-center space-x-2">
          <img src={icon} alt="CarroJá" className="w-24 object-contain" />
        </a>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {["Inicio", "Comprar carro", "Vender carro", "Alugar carro", "Sobre nós", "Contactos"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            )
          )}
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
            {["Inicio", "Comprar carro", "Vender carro", "Alugar carro", "Sobre nós", "Contactos"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
