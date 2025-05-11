"use client";

import { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { AppLanguages } from "@/i18n/types";
import { changeLanguage } from "@/app/language/actions/change_language";

const locales = [
  { code: AppLanguages.EN, label: "English" },
  { code: AppLanguages.ES, label: "Español" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isChanging, setIsChanging] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto

  const handleLanguageChange = async (locale: AppLanguages) => {
    setIsChanging(true);
    setIsOpen(false); // Cerrar el menú al seleccionar un idioma

    try {
      // Llamamos a la Server Action para cambiar el idioma
      await changeLanguage(locale);

      // Forzamos un cambio de ruta para actualizar el idioma en el cliente
      router.push("/"); // Esto recargará la página con el nuevo idioma
    } catch (error) {
      console.error("Error cambiando el idioma", error);
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none"
        disabled={isChanging}
        onClick={() => setIsOpen((prev) => !prev)} // Cambiar el estado de visibilidad al hacer clic
      >
        <FaGlobeAmericas />
      </button>

      {isOpen && ( // Solo mostrar el menú si está abierto
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="py-2">
            {locales.map((locale) => (
              <li key={locale.code}>
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  disabled={isChanging}
                  onClick={() => handleLanguageChange(locale.code)}
                >
                  {locale.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
