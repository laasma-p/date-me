import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footerText = t("footer.footer-text", { returnObjects: true });

  return (
    <footer>
      <p>
        {footerText[0]} ❤️ {footerText[1]}
      </p>
      <p>
        &copy; {new Date().getFullYear()} {t("footer.copyright")}
      </p>
    </footer>
  );
};

export default Footer;
