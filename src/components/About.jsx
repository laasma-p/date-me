import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h2>{t("about.about-me")}</h2>
      <p>
        {t("about.description")} mais... je préférerais en apprendre plus sur
        toi. 😉
      </p>
    </section>
  );
};

export default About;
