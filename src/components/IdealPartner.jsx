import { useTranslation } from "react-i18next";

const IdealPartner = () => {
  const { t } = useTranslation();
  const requirements = t("ideal-partner.requirements-list", {
    returnObjects: true,
  });

  return (
    <section>
      <h2>{t("ideal-partner.ideal-partner-heading")}</h2>
      <div>
        <div>
          <span>{requirements[0]} 😀</span>
        </div>
        <div>
          <span>{requirements[1]}</span>
        </div>
        <div>
          <span>{requirements[2]}</span>
        </div>
        <div>
          <span>{requirements[3]}</span>
        </div>
      </div>
    </section>
  );
};

export default IdealPartner;
