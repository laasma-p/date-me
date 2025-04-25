import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faMusic,
  faPalette,
  faLaptopCode,
  faTv,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Interests = () => {
  const { t } = useTranslation();
  const interests = t("interests.interests-list", { returnObjects: true });

  return (
    <section>
      <h2>{t("interests.interests-heading")}</h2>
      <div>
        <div>
          <FontAwesomeIcon icon={faDumbbell} />
          <span>{interests[0]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faMusic} />
          <span>{interests[1]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPalette} />
          <span>{interests[2]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLaptopCode} />
          <span>{interests[3]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faTv} />
          <span>{interests[4]}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobe} />
          <span>{interests[5]}</span>
        </div>
      </div>
    </section>
  );
};

export default Interests;
