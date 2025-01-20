import { useTranslation } from "react-i18next";

const Contact = () => {
  const socialIcons = [
    {
      src: "/assets/fb.png",
      href: "https://www.facebook.com/share/19rJjtCe6i/?mibextid=LQQJ4d",
    },
    {
      src: "/assets/insta.png",
      href: "https://www.instagram.com/pearlpixelsagency?igsh=MmNudTU4ZnN0eXgx",
    },
    {
      src: "/assets/linkedin.png",
      href: "https://www.linkedin.com/company/pearl-pixels/posts/?feedView=all",
    },
  ];
  const { t } = useTranslation();
  return (
    <>
      <div className="contact-us" id="contact">
        <form action="">
          <input
            type="text"
            placeholder={t("contact.form.input_name_placeholder")}
          />
          <input
            type="email"
            placeholder={t("contact.form.input_email_placeholder")}
          />
          <textarea
            placeholder={t("contact.form.textarea_placeholder")}
          ></textarea>
          <button type="submit" className="main-btn contact-us-btn">
            {t("contact.form.button_submit")}
          </button>
        </form>
        <div className="social-media">
          <h2>{t("contact.title")}</h2>
          <p>
            {t("contact.subtitle")}
            {}
          </p>
          <div className="social-icons desktop">
            {socialIcons.map((icon) => (
              <a href={icon.href} key={icon.src}>
                <img src={icon.src} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="social-icons mobile">
        {socialIcons.map((icon) => (
          <a href={icon.href} key={icon.src}>
            <img src={icon.src} alt="" />
          </a>
        ))}
      </div>
    </>
  );
};

export default Contact;
