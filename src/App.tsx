import { Helmet } from "react-helmet";
import Header from "./Header";
import Hero from "./Hero";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { i18n, t } = useTranslation();
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "ar";
    if (i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang);
    }
    localStorage.setItem("lang", i18n.language);
  }, [i18n]);

  const documentTitle = t("documentTitle");
  const documentDescription = t("documentDescription");

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: i18n.language,
          dir: i18n.language === "ar" ? "rtl" : "ltr",
        }}
      >
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescription} />
        <meta property="og:title" content={documentTitle} />
        <meta property="og:description" content={documentDescription} />
        <meta property="og:image" content="/assets/logo.png" />
      </Helmet>

      <section className="app">
        <Header />
        <Hero />
        <Contact />
      </section>
      <ToastContainer />
    </>
  );
};

export default App;
