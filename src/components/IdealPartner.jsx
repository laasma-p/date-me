import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaugh,
  faVenusMars,
  faPaw,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faFaceLaugh} />
          <span>{requirements[0]} 😀</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faVenusMars} />
          <span>{requirements[1]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPaw} />
          <span>{requirements[2]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <span>{requirements[3]}</span>
        </div>
      </div>
    </section>
  );
};

export default IdealPartner;
