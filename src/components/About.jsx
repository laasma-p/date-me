import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="text-nero dark:text-white-smoke text-center max-w-4xl mx-auto py-4"
    >
      <h2 className="text-3xl font-semibold mb-2">{t("about.about-me")}</h2>
      <p className="text-lg sm:text-xl">
        {t("about.description")} mais... je préférerais en apprendre plus sur
        toi. 😉
      </p>
    </section>
  );
};

export default About;
