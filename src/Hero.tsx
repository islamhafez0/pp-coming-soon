import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [userEmail, setUserEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userEmail.trim()) return;
    toast(
      <div>
        <h4 className="toast_title">{t("hero.toast_title")}</h4>
        <p>{t("hero.toast_describbtion")}</p>
      </div>,
      {
        position: `top-${currentLanguage === "ar" ? "right" : "left"}`,
        progressClassName: "custom_progress",
      }
    );
    setUserEmail("");
  };
  return (
    <div className="hero">
      <div className="col-1">
        <h1>
          {t("hero.heroTitle.t1")} <p> {t("hero.heroTitle.t2")}</p>
          <p className="gradient">{t("hero.heroTitle.t3")}</p>
        </h1>
        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: t("hero.description", {
              loopImage: `<img src="${t(
                "hero.images.loopImage"
              )}" alt="loop" />`,
            }),
          }}
        ></p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t("hero.input")}
            onChange={handleChange}
            value={userEmail}
          />
          <button type="submit" className="main-btn">
            {t("hero.button")}
          </button>
        </form>
      </div>
      <div className="col-2">
        <div className="hero_img-wrapper">
          <img
            src="/assets/hero.png"
            alt="Hero Image"
            className={currentLanguage === "ar" ? "rotate" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
