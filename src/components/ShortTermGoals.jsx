import { useTranslation } from "react-i18next";

const ShortTermGoals = () => {
  const { t } = useTranslation();
  const shortTermGoals = t("short-term-goals.short-term-goals-list", {
    returnObjects: true,
  });

  return (
    <section>
      <h2>{t("short-term-goals.short-term-goals-heading")}</h2>
      <div>
        <div>
          <span>{shortTermGoals[0]}</span>
        </div>
        <div>
          <span>{shortTermGoals[1]}</span>
        </div>
        <div>
          <span>{shortTermGoals[2]}</span>
        </div>
      </div>
    </section>
  );
};

export default ShortTermGoals;
