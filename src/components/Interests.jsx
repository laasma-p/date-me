import { useTranslation } from "react-i18next";

const Interests = () => {
  const { t } = useTranslation();
  const interests = t("interests.interests-list", { returnObjects: true });

  return (
    <section>
      <h2>{t("interests.interests-heading")}</h2>
      <div>
        <div>
          <span>{interests[0]}</span>
        </div>
        <div>
          <span>{interests[1]}</span>
        </div>
        <div>
          <span>{interests[2]}</span>
        </div>
        <div>
          <span>{interests[3]}</span>
        </div>
        <div>
          <span>{interests[4]}</span>
        </div>
        <div>
          <span>{interests[5]}</span>
        </div>
      </div>
    </section>
  );
};

export default Interests;
