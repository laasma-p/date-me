import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBanSmoking,
  faSwatchbook,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faBanSmoking} />
          <span>{shortTermGoals[0]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faSwatchbook} />
          <span>{shortTermGoals[1]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBrain} />
          <span>{shortTermGoals[2]}</span>
        </div>
      </div>
    </section>
  );
};

export default ShortTermGoals;
