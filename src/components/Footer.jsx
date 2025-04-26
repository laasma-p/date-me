import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footerText = t("footer.footer-text", { returnObjects: true });

  return (
    <footer className="text-nero dark:text-white-smoke text-center py-6">
      <p className="text-lg sm:text-xl font-semibold">
        {footerText[0]} ❤️ {footerText[1]}
      </p>
      <p className="mt-2 text-lg opacity-80">
        &copy; {new Date().getFullYear()} {t("footer.copyright")}
      </p>
    </footer>
  );
};

export default Footer;
