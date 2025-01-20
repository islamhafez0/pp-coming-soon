import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const switchLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setMobileMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <a href="#" className="logo">
        <img src="/assets/logo.png" alt="PearlPixels" />
      </a>
      <nav>
        <div className="desktop-menu">
          <button
            className="language-switcher"
            onClick={() =>
              switchLanguage(currentLanguage === "en" ? "ar" : "en")
            }
          >
            {currentLanguage === "ar" ? "English" : "العربية"}{" "}
          </button>
          <a href="#contact" className="main-btn">
            {t("header.button_contact")}
          </a>
        </div>
        <button onClick={() => setMobileMenu(true)} className="menu-toggler">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-align-justify"
            color="#ffffff"
          >
            <path d="M3 12h18" />
            <path d="M3 18h18" />
            <path d="M3 6h18" />
          </svg>
        </button>
        <div className={`mobile-menu ${mobileMenu ? "show" : "hide"}`}>
          <div className="manu-close_wrapper">
            <button onClick={() => setMobileMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x"
                color="#ffffff"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="mobile-menu_items">
            <a href="#contact" className="main-btn">
              {t("header.button_contact")}
            </a>
            <button
              className="language-switcher"
              onClick={() =>
                switchLanguage(currentLanguage === "en" ? "ar" : "en")
              }
            >
              {currentLanguage === "ar" ? "English" : "العربية"}{" "}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
